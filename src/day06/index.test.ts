import { expect, test } from "bun:test"
import { solvePart1 } from "./index"

const example = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +`

test("solve part 1", () => {
  expect(solvePart1(example)).toBe(4277556)
})
