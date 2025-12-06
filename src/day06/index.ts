const sum = (array: number[]) => array.reduce((prev, curr) => prev + curr, 0)
const product = (array: number[]) =>
  array.reduce((prev, curr) => prev * curr, 1)

export const solvePart1 = (input: string) => {
  const grid = input
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => line.trim().split(/\s+/))

  if (grid.length === 0) throw Error("empty grid")

  const width = grid[0]!.length
  const height = grid.length

  const answers: number[] = []

  for (let x = 0; x < width; x++) {
    const operands = []

    for (let y = 0; y < height - 1; y++) {
      const current = grid[y]?.[x]
      if (!current) throw Error(`nothing at ${x}, ${y}`)
      operands.push(+current)
    }

    const operator = grid[height - 1]?.[x]
    if (operator === "+") {
      answers.push(sum(operands))
    } else if (operator === "*") {
      answers.push(product(operands))
    } else {
      throw Error(`unknown operator: ${operator}`)
    }
  }

  return sum(answers)
}

export const solvePart2 = () => {
  return 0
}

const file = Bun.file("src/inputs/day06.txt")
const input = await file.text()

console.log(`Part 1: ${solvePart1(input)}`)
// console.log(`Part 2: ${solvePart2()}`)
