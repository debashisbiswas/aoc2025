class Range {
  left: number
  right: number

  constructor(left: number, right: number) {
    this.left = left
    this.right = right
  }

  contains = (n: number) => n >= this.left && n <= this.right
  lengthInclusive = () => this.right - this.left + 1
  overlaps = (other: Range) =>
    this.contains(other.left) || this.contains(other.right)

  merge = (other: Range) => {
    const left = Math.min(this.left, other.left)
    const right = Math.max(this.right, other.right)
    return new Range(left, right)
  }
}

export const makeRange = (left: number, right: number) => new Range(left, right)

export const parseRange = (s: string) => {
  const [left, right] = s.split("-")
  return makeRange(+left!, +right!)
}

export const solvePart1 = (ranges: Range[], ids: number[]) => {
  let count = 0

  for (const id of ids) {
    for (const range of ranges) {
      if (range.contains(id)) {
        count++
        break
      }
    }
  }

  return count
}

export const solvePart2 = (ranges: Range[]) => {
  const reducedRanges = new Set<Range>()

  for (const range of ranges) {
    let accounted = false

    for (const rr of reducedRanges.keys()) {
      console.log(rr)
      if (range.overlaps(rr)) {
        reducedRanges.delete(rr)
        reducedRanges.add(range.merge(rr))
        accounted = true
      }
    }

    if (!accounted) reducedRanges.add(range)
  }

  return reducedRanges
    .keys()
    .map((range) => range.lengthInclusive())
    .reduce((prev, curr) => prev + curr, 0)
}

const file = Bun.file("src/inputs/day05.txt")
const parts = (await file.text()).split("\n\n").filter((s) => s.length > 0)

const ranges = parts[0]!
  .split("\n")
  .filter((s) => s.length > 0)
  .map(parseRange)

const ids = parts[1]!
  .split("\n")
  .filter((s) => s.length > 0)
  .map((s) => +s)

console.log(`Part 1: ${solvePart1(ranges, ids)}`)
// console.log(`Part 2: ${solvePart2(ranges)}`)
