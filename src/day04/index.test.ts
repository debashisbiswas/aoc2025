import { expect, test } from "bun:test"
import { solvePart1, solvePart2 } from "./index"

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
