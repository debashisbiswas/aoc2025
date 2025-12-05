const isRoll = (s: string | undefined) => s === "@"

export const iterate = (rows: string[]) => {
  let accessible = 0
  const updatedRows = []

  for (let y = 0; y < rows.length; y++) {
    updatedRows[y] = ""

    for (let x = 0; x < rows[y]!.length; x++) {
      if (!isRoll(rows[y]?.[x])) {
        updatedRows[y] += "."
        continue
      }

      let adjacentRolls = [
        rows[y - 1]?.[x - 1],
        rows[y - 1]?.[x],
        rows[y - 1]?.[x + 1],

        rows[y]?.[x - 1],
        rows[y]?.[x + 1],

        rows[y + 1]?.[x - 1],
        rows[y + 1]?.[x],
        rows[y + 1]?.[x + 1],
      ].filter(isRoll).length

      if (adjacentRolls < 4) {
        accessible++
        updatedRows[y] += "."
      } else {
        updatedRows[y] += "@"
      }
    }
  }

  return { accessible, updatedRows }
}

export const solvePart1 = (input: string[]) => {
  const result = iterate(input)
  return result.accessible
}

export const solvePart2 = (input: string[]): number => {
  const result = iterate(input)
  if (result.accessible > 0) {
    return result.accessible + solvePart2(result.updatedRows)
  } else {
    return 0
  }
}

const file = Bun.file("src/inputs/day04.txt")
const text = await file.text()
const lines = text.split("\n")

console.log(`Part 1: ${solvePart1(lines)}`)
console.log(`Part 2: ${solvePart2(lines)}`)
