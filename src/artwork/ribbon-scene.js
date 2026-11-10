import { ACESFilmicToneMapping, CanvasTexture, Color, DirectionalLight, EquirectangularReflectionMapping, Group, HemisphereLight, Mesh, MeshStandardMaterial, OrthographicCamera, PCFShadowMap, Scene, SRGBColorSpace, Vector3, WebGLRenderer } from "three";
import { createRibbonGeometry, motionAt, START_PHASE } from "./ribbon-geometry.mjs";

// This entry is used only by ribbon-scene.html, never by the homepage entry.
let renderer, geometry, environment, resizeObserver, frame = 0;
const materials = [];
let failed = false, started = false;
const notify = (type) => window.parent.postMessage({ type }, window.location.origin);
const dispose = () => {
  cancelAnimationFrame(frame);
  resizeObserver?.disconnect();
  geometry?.dispose();
  materials.forEach((material) => material.dispose());
  environment?.dispose();
  renderer?.dispose();
};
const fail = () => {
  if (failed) return;
  failed = true;
  document.documentElement.dataset.motionState = "failed";
  notify("ribbon:error");
  dispose();
};
window.addEventListener("error", fail);
window.addEventListener("unhandledrejection", fail);
window.addEventListener("pagehide", dispose, { once: true });

try {
  renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0xffffff, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.debug.onShaderError = fail;
  renderer.domElement.addEventListener("webglcontextlost", fail, { once: true });
  document.body.appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new OrthographicCamera(-2, 2, 1.55, -1.55, 0.1, 30);
  camera.position.set(4.2, 3.4, 5.6);
  camera.lookAt(0, 0, 0);
  scene.add(new HemisphereLight(0xffffff, 0x9aa5bb, 1.2));
  const key = new DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 5, 7);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = key.shadow.camera.bottom = -2.4;
  key.shadow.camera.right = key.shadow.camera.top = 2.4;
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 16;
  key.shadow.normalBias = 0.015;
  scene.add(key);
  const fill = new DirectionalLight(0xdce6ff, 0.7);
  fill.position.set(-4, 1, -2);
  scene.add(fill);

  // A tiny procedural studio environment; no image, HDR, or model downloads.
  const studio = document.createElement("canvas");
  studio.width = 512; studio.height = 256;
  const context = studio.getContext("2d");
  if (context) {
    const backdrop = context.createLinearGradient(0, 0, 0, 256);
    backdrop.addColorStop(0, "#ffffff");
    backdrop.addColorStop(0.6, "#9aa6b9");
    backdrop.addColorStop(1, "#e5e9ef");
    context.fillStyle = backdrop;
    context.fillRect(0, 0, 512, 256);
    context.fillStyle = "#ffffff";
    context.fillRect(40, 10, 100, 175);
    context.fillRect(345, 20, 65, 215);
    environment = new CanvasTexture(studio);
    environment.mapping = EquirectangularReflectionMapping;
    environment.colorSpace = SRGBColorSpace;
    scene.environment = environment;
  }

  geometry = createRibbonGeometry();
  const porcelain = new MeshStandardMaterial({ color: 0xe3e4e7, metalness: 0.24, roughness: 0.29 });
  const silver = new MeshStandardMaterial({ color: 0xaab0bc, metalness: 0.8, roughness: 0.26 });
  materials.push(porcelain, silver);
  const phase = { value: START_PHASE };
  const blue = new Color("#0638ef");
  silver.onBeforeCompile = (shader) => {
    shader.uniforms.uBandPhase = phase;
    shader.uniforms.uBandColor = { value: blue };
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying float vRibbonT;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvRibbonT = uv.x;");
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vRibbonT;\nuniform float uBandPhase;\nuniform vec3 uBandColor;").replace("#include <color_fragment>", `#include <color_fragment>
      float bandDistance = abs(fract(vRibbonT - uBandPhase + 0.5) - 0.5);
      float band = 1.0 - smoothstep(0.064, 0.072, bandDistance);
      diffuseColor.rgb = mix(diffuseColor.rgb, uBandColor, band);
    `).replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.17, band);").replace("#include <metalnessmap_fragment>", "#include <metalnessmap_fragment>\nmetalnessFactor = mix(metalnessFactor, 0.28, band);");
  };
  silver.customProgramCacheKey = () => "travelling-ribbon-band-v1";

  const sculpture = new Group();
  const axis = new Vector3(1, 1, 1).normalize();
  for (let i = 0; i < 3; i++) {
    const ribbon = new Mesh(geometry, i === 0 ? silver : porcelain);
    ribbon.quaternion.setFromAxisAngle(axis, i * Math.PI * 2 / 3);
    ribbon.castShadow = ribbon.receiveShadow = true;
    sculpture.add(ribbon);
  }
  sculpture.rotation.z = -0.12;
  scene.add(sculpture);

  const render = () => { if (!failed) renderer.render(scene, camera); };
  const resize = () => {
    const width = Math.max(1, window.innerWidth), height = Math.max(1, window.innerHeight);
    camera.left = -1.55 * width / height;
    camera.right = 1.55 * width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    render();
  };
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(document.body);
  resize();
  document.documentElement.dataset.motionState = "waiting";

  const start = () => {
    if (started || failed) return;
    started = true;
    const beginning = performance.now();
    document.documentElement.dataset.motionState = "playing";
    const animate = (now) => {
      if (failed) return;
      try {
        const motion = motionAt(now - beginning);
        phase.value = motion.phase;
        renderer.domElement.dataset.bandPhase = motion.phase.toFixed(4);
        render();
        if (motion.complete) document.documentElement.dataset.motionState = "settled";
        else frame = requestAnimationFrame(animate);
      } catch { fail(); }
    };
    frame = requestAnimationFrame(animate);
  };
  window.addEventListener("message", (event) => {
    if (event.source === window.parent && event.origin === window.location.origin && event.data?.type === "ribbon:start") start();
  });
  if (!failed) {
    notify("ribbon:ready");
    if (window.parent === window) start();
  }
} catch { fail(); }
