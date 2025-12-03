export const rotate = (
  from: number,
  direction: "L" | "R",
  amount: number,
): number => {
  if (direction === "L") {
    let result = from - amount

    while (result < 0) {
      result += 100
    }

    return result
  } else {
    let result = from + amount

    while (result > 99) {
      result -= 100
    }

    return result
  }
}

export const parseRotation = (s: string) => {
  if (s.length === 0) throw Error("empty string")

  const direction = s[0]

  if (direction !== "L" && direction !== "R") {
    throw Error(`invalid direction: ${direction}`)
  }

  const amountString = s.substring(1)

  if (amountString.length === 0) {
    throw Error(`missing amount`)
  }

  const amount = Number(amountString)

  if (Number.isNaN(amount)) {
    throw Error(`not a number: ${amountString}`)
  }

  return {
    direction,
    amount,
  } as const // preserve narrowed direction type
}

export const solvePart1 = (rotations: ReturnType<typeof parseRotation>[]) => {
  let dial = 50
  let password = 0

  for (const rotation of rotations) {
    dial = rotate(dial, rotation.direction, rotation.amount)
    if (dial === 0) password++
  }

  return password
}

export const solvePart2 = (rotations: ReturnType<typeof parseRotation>[]) => {
  const reducedRotations: typeof rotations = []

  rotations.forEach(({ direction, amount }) => {
    for (let i = 0; i < amount; i++) {
      reducedRotations.push({
        direction,
        amount: 1,
      })
    }
  })

  return solvePart1(reducedRotations)
}

const file = Bun.file("src/inputs/day01.txt")
const text = await file.text()

const rotations = text
  .split("\n")
  .filter((line) => line.length > 0)
  .map(parseRotation)

console.log(`Part 1: ${solvePart1(rotations)}`)
console.log(`Part 2: ${solvePart2(rotations)}`)
