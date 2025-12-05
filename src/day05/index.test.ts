import { expect, test } from "bun:test"
import { makeRange, parseRange, solvePart1, solvePart2 } from "./index"

const example = {
  ranges: ["3-5", "10-14", "16-20", "12-18"].map(parseRange),
  ids: [1, 5, 8, 11, 17, 32],
}

test("parse range", () => {
  expect(parseRange("3-5")).toMatchObject(makeRange(3, 5))
})

test("range", () => {
  const range = makeRange(10, 20)
  expect(range.contains(9)).toBeFalse()
  expect(range.contains(10)).toBeTrue()
  expect(range.contains(15)).toBeTrue()
  expect(range.contains(20)).toBeTrue()
  expect(range.contains(21)).toBeFalse()
})

test("range length", () => {
  const range = makeRange(3, 5)
  expect(range.lengthInclusive()).toBe(3)
})

test("range overlaps", () => {
  expect(makeRange(3, 5).overlaps(makeRange(10, 12))).toBeFalse()
  expect(makeRange(3, 5).overlaps(makeRange(4, 10))).toBeTrue()
  expect(makeRange(3, 5).overlaps(makeRange(5, 10))).toBeTrue()
})

test("solve part 1", () => {
  expect(solvePart1(example.ranges, example.ids)).toBe(3)
})

test("solve part 2", () => {
  expect(solvePart2(example.ranges)).toBe(14)
})
