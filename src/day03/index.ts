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

export const solvePart1 = (input: string[]) => {
  return input.map(joltage).reduce((prev, curr) => prev + curr, 0)
}

export const solvePart2 = (input: string[]) => {}

const file = Bun.file("src/inputs/day03.txt")
const text = await file.text()
const input = text.split("\n").filter((line) => line.length > 0)

console.log(`Part 1: ${solvePart1(input)}`)
// console.log(`Part 2: ${solvePart2(input)}`)
