export const joltage = (input: string) => {
  let maxNumber = 0

  for (let i = 0; i < input.length; i++) {
    const primary = parseInt(input[i]!)
    for (let j = i + 1; j < input.length; j++) {
      const secondary = parseInt(input[j]!)
      const num = primary * 10 + secondary

      if (num > maxNumber) maxNumber = num
    }
  }

  return maxNumber
}

export const superjoltage = (input: string) => {
  let result = ""
  let marker = 0

  for (let i = 11; i >= 0; i--) {
    // Pick the highest number, but leave room at the end of the string to avoid picking something too far over; avoiding a case where we get a high number but miss out on a lower number that would contribute a higher place value.
    let highest = ""
    for (let j = marker; j < input.length - i; j++) {
      const current = input[j]!
      if (current > highest) {
        highest = current
        marker = j + 1
      }
    }
    result += highest
  }

  return +result
}

export const solvePart1 = (input: string[]) =>
  input.map(joltage).reduce((prev, curr) => prev + curr, 0)

export const solvePart2 = (input: string[]) =>
  input.map(superjoltage).reduce((prev, curr) => prev + curr, 0)

const file = Bun.file("src/inputs/day03.txt")
const text = await file.text()
const input = text.split("\n").filter((line) => line.length > 0)

console.log(`Part 1: ${solvePart1(input)}`)
console.log(`Part 2: ${solvePart2(input)}`)
