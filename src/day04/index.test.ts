import { expect, test } from "bun:test"
import { iterate, solvePart1, solvePart2 } from "./index"

const example = [
  "..@@.@@@@.",
  "@@@.@.@.@@",
  "@@@@@.@.@@",
  "@.@@@@..@.",
  "@@.@@@@.@@",
  ".@@@@@@@.@",
  ".@.@.@.@@@",
  "@.@@@.@@@@",
  ".@@@@@@@@.",
  "@.@.@@@.@.",
]

test("solve part 1", () => {
  expect(solvePart1(example)).toBe(13)
})

test("solve part 2", () => {
  expect(solvePart2(example)).toBe(43)
})

test("should return removed rows correctly", () => {
  const expected = [
    ".......@..",
    ".@@.@.@.@@",
    "@@@@@...@@",
    "@.@@@@..@.",
    ".@.@@@@.@.",
    ".@@@@@@@.@",
    ".@.@.@.@@@",
    "..@@@.@@@@",
    ".@@@@@@@@.",
    "....@@@...",
  ]

  const result = iterate(example)
  expect(result.accessible).toBe(13)
  expect(result.updatedRows).toEqual(expected)
})
