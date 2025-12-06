import { expect, test } from "bun:test"
import { parseColumns, solvePart1, solvePart2 } from "./index"

const example = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

test("solve part 1", () => {
  expect(solvePart1(example)).toBe(4277556)
})

test("parse columns", () => {
  expect(parseColumns("*   +   *   +  ")).toEqual([
    {
      operator: "*",
      index: 0,
      width: 3,
    },
    {
      operator: "+",
      index: 4,
      width: 3,
    },
    {
      operator: "*",
      index: 8,
      width: 3,
    },
    {
      operator: "+",
      index: 12,
      width: 3,
    },
  ])
})

test("solve part 2", () => {
  expect(solvePart2(example)).toBe(3263827)
})
