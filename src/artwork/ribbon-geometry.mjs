import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three";

export const LOOP_MS = 2200;
export const CIRCUITS = 2;
export const START_PHASE = 0.12;

export const motionAt = (elapsed) => {
  const circuits = Math.min(CIRCUITS, Math.max(0, elapsed / LOOP_MS));
  return { phase: START_PHASE + circuits, complete: circuits === CIRCUITS };
};

/** A closed, bevelled flat band, with U following its full circumference. */
export const createRibbonGeometry = (segments = 160) => {
  const width = 0.18, depth = 0.045, bevel = 0.023;
  const section = [[width - bevel, depth], [-width + bevel, depth], [-width, depth - bevel], [-width, -depth + bevel], [-width + bevel, -depth], [width - bevel, -depth], [width, -depth + bevel], [width, depth - bevel]];
  const positions = [], uv = [], indices = [];
  const stride = section.length;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments, angle = t * Math.PI * 2;
    const x = Math.cos(angle), y = Math.sin(angle);
    const radial = new Vector3(x / 1.35, y / 0.85, 0).normalize();
    for (let j = 0; j < stride; j++) {
      const [outward, normal] = section[j];
      positions.push(1.35 * x + radial.x * outward, 0.85 * y + radial.y * outward, normal);
      uv.push(t, j / stride);
      if (i === segments) continue;
      const a = i * stride + j, b = a + stride;
      const d = i * stride + (j + 1) % stride, c = d + stride;
      indices.push(a, b, d, b, c, d);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const normals = geometry.getAttribute("normal");
  for (let j = 0; j < stride; j++) {
    const end = segments * stride + j;
    const normal = new Vector3(normals.getX(j) + normals.getX(end), normals.getY(j) + normals.getY(end), normals.getZ(j) + normals.getZ(end)).normalize();
    normals.setXYZ(j, normal.x, normal.y, normal.z);
    normals.setXYZ(end, normal.x, normal.y, normal.z);
  }
  geometry.computeBoundingSphere();
  return geometry;
};
