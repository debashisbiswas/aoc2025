import { expect, test } from "bun:test";
import { parseRotation, rotate, solve } from "./index";

test("rotate left", () => {
  expect(rotate(50, "L", 30)).toBe(20);
});

test("rotate right", () => {
  expect(rotate(50, "R", 30)).toBe(80);
});

test("boundary: rotate to 0", () => {
  expect(rotate(1, "L", 1)).toBe(0);
});

test("boundary: rotate to 99", () => {
  expect(rotate(98, "R", 1)).toBe(99);
});

test("wraparound: left side", () => {
  expect(rotate(0, "L", 1)).toBe(99);
  expect(rotate(5, "L", 10)).toBe(95);
  expect(rotate(5, "L", 100)).toBe(5);
  expect(rotate(5, "L", 200)).toBe(5);
});

test("wraparound: right side", () => {
  expect(rotate(99, "R", 1)).toBe(0);
  expect(rotate(95, "R", 10)).toBe(5);
  expect(rotate(95, "R", 110)).toBe(5);
  expect(rotate(95, "R", 210)).toBe(5);
});

test("parse rotation", () => {
  expect(parseRotation("L68")).toEqual({
    direction: "L",
    amount: 68,
  });

  expect(parseRotation("R123")).toEqual({
    direction: "R",
    amount: 123,
  });
});

test("parse rotation errors", () => {
  expect(() => parseRotation("")).toThrowError();
  expect(() => parseRotation("68")).toThrowError();
  expect(() => parseRotation("R")).toThrowError();
});

test("solve test input", () => {
  const rotations = [
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
  ].map(parseRotation);

  const password = solve(rotations);
  expect(password).toBe(3);
});
