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
      if (current == null) throw Error(`nothing at ${x}, ${y}`)
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

export const parseColumns = (input: string) =>
  // Optional ($| ) to cover the last line, which will not have a blank space separator afterward
  [...input.matchAll(/([\+\*] +)($| )/g)].map((match) => ({
    operator: match[0].trim(),
    index: match.index,
    width: match[1]?.length ?? 0,
  }))

export const solvePart2 = (input: string) => {
  const rows = input.split("\n").filter((line) => line.length > 0)
  if (rows.length === 0) throw Error("empty rows")

  const answers: number[] = []

  const columns = parseColumns(rows[rows.length - 1]!)
  for (const column of columns) {
    const operands: number[] = []

    for (let x = column.index; x < column.index + column.width; x++) {
      let currentNumber = ""

      for (let y = 0; y < rows.length - 1; y++) {
        const current = rows[y]?.[x]
        if (current == null) throw Error(`nothing at ${x}, ${y}`)

        currentNumber += current
      }

      operands.push(+currentNumber)
    }

    if (column.operator === "+") {
      answers.push(sum(operands))
    } else if (column.operator === "*") {
      answers.push(product(operands))
    } else {
      throw Error(`unknown operator: ${column.operator}`)
    }
  }

  return sum(answers)
}

const file = Bun.file("src/inputs/day06.txt")
const input = await file.text()

console.log(`Part 1: ${solvePart1(input)}`)
console.log(`Part 2: ${solvePart2(input)}`)
