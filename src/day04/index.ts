const isRoll = (s: string | undefined) => s === "@"

export const solvePart1 = (input: string[]) => {
  let accessible = 0

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y]!.length; x++) {
      if (!isRoll(input[y]?.[x])) continue

      let adjacentRolls = [
        input[y - 1]?.[x - 1],
        input[y - 1]?.[x],
        input[y - 1]?.[x + 1],

        input[y]?.[x - 1],
        input[y]?.[x + 1],

        input[y + 1]?.[x - 1],
        input[y + 1]?.[x],
        input[y + 1]?.[x + 1],
      ].filter(isRoll).length

      if (adjacentRolls < 4) accessible++
    }
  }

  return accessible
}

export const solvePart2 = (input: string[]) => {}

const file = Bun.file("src/inputs/day04.txt")
const text = await file.text()
const lines = text.split("\n")

console.log(`Part 1: ${solvePart1(lines)}`)
console.log(`Part 2: ${solvePart2(lines)}`)
