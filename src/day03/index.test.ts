import { expect, test } from "bun:test"
import { joltage, solvePart1, solvePart2, superjoltage } from "./index"

test("joltage", () => {
  expect(joltage("987654321111111")).toBe(98)
  expect(joltage("811111111111119")).toBe(89)
  expect(joltage("234234234234278")).toBe(78)
  expect(joltage("818181911112111")).toBe(92)
})

test("super joltage", () => {
  expect(superjoltage("987654321111111")).toBe(987654321111)
  expect(superjoltage("811111111111119")).toBe(811111111119)
  expect(superjoltage("234234234234278")).toBe(434234234278)
  expect(superjoltage("818181911112111")).toBe(888911112111)
})

const example = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
]

test("solve part 1", () => {
  expect(solvePart1(example)).toBe(357)
})

test("solve part 2", () => {
  expect(solvePart2(example)).toBe(3121910778619)
})
