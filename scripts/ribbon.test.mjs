import assert from "node:assert/strict";
import test from "node:test";
import { createRibbonGeometry, motionAt, START_PHASE, LOOP_MS } from "../src/artwork/ribbon-geometry.mjs";

test("the blue band completes two circuits and stays at its original position", () => {
  assert.equal(motionAt(LOOP_MS).phase, START_PHASE + 1);
  assert.equal(motionAt(LOOP_MS).complete, false);
  const end = motionAt(LOOP_MS * 2);
  assert.equal(end.complete, true);
  assert.ok(Math.abs((end.phase % 1) - START_PHASE) < 1e-10);
  assert.deepEqual(motionAt(LOOP_MS * 20), end);
});

test("closed ribbon has matching seam positions and lighting normals", () => {
  const geometry = createRibbonGeometry(80);
  for (const name of ["position", "normal"]) {
    const attribute = geometry.getAttribute(name);
    for (let j = 0; j < 8; j++) {
      const end = 80 * 8 + j;
      for (const get of ["getX", "getY", "getZ"]) {
        assert.ok(Math.abs(attribute[get](j) - attribute[get](end)) < 1e-6, `${name} seam at ${j}`);
      }
    }
  }
  for (const value of geometry.getAttribute("normal").array) assert.ok(Number.isFinite(value));
  assert.ok(geometry.boundingSphere.radius < 1.6);
  geometry.dispose();
});

test("an unavailable WebGL context reports failure to its host", async (t) => {
  const messages = [];
  const originalError = console.error;
  console.error = () => {};
  globalThis.cancelAnimationFrame = () => {};
  globalThis.window = { location: { origin: "https://portfolio.test" }, parent: { postMessage: (...args) => messages.push(args) }, addEventListener() {} };
  globalThis.document = { documentElement: { dataset: {} }, createElementNS: () => ({ style: {}, addEventListener() {}, removeEventListener() {}, setAttribute() {}, getContext: () => null }) };
  t.after(() => {
    console.error = originalError;
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.cancelAnimationFrame;
  });
  await import("../src/artwork/ribbon-scene.js");
  assert.equal(document.documentElement.dataset.motionState, "failed");
  assert.deepEqual(messages, [[{ type: "ribbon:error" }, "https://portfolio.test"]]);
});
