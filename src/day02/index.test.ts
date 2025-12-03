import { expect, test } from "bun:test"
import { solvePart1, solvePart2, validID, validIDPart2 } from "./index"

test("valid and invalid ids", () => {
  expect(validID("115")).toBeTrue()

  expect(validID("11")).toBeFalse()
  expect(validID("1010")).toBeFalse()
  expect(validID("1188511885")).toBeFalse()
  expect(validID("222222")).toBeFalse()
  expect(validID("123123")).toBeFalse()
})

test("valid and invalid ids, part 2", () => {
  expect(validIDPart2("123")).toBeTrue()

  expect(validIDPart2("151515")).toBeFalse()
})

const example =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"

test("solve part 1", () => {
  expect(solvePart1(example)).toBe(1227775554)
})

test("solve part 2", () => {
  expect(solvePart2(example)).toBe(1227775554)
})
