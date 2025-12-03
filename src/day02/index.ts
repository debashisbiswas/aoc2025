export const validID = (id: string) => {
  // Odd length can't have the same pattern twice
  if (id.length % 2 === 1) {
    return true
  }

  for (let i = 0; i <= id.length / 2; i++) {
    const first = id.substring(0, i)
    const second = id.substring(i)

    if (first === second) {
      return false
    }
  }

  return true
}

export const solvePart1 = (input: string) => {
  const pairs = input.split(",").map((s) => s.trim())

  let sum = 0
  for (const pair of pairs) {
    const [left, right] = pair.split("-").map(Number)

    if (left == null) {
      throw Error(`left is null? ${left}`)
    }

    if (right == null) {
      throw Error(`right is null? ${right}`)
    }

    for (let num = left; num <= right; num++) {
      if (!validID(String(num))) {
        sum += num
      }
    }
  }

  return sum
}

export const solvePart2 = () => {}

const file = Bun.file("src/inputs/day02.txt")
const text = await file.text()

console.log(solvePart1(text))
