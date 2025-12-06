part 1: "the left/right alignment of numbers within each problem can be ignored"

part 2: jk whitespace is everything now

Problems like this are easier to understand with imperative programming, even
though it's not super readable - I'm curious to see how functional programmers
solve it.

My solution to part 2 plays off of the assumption that the operators in the
input are always at the leftmost part of their column. By looking at the
operator row first, I could figure out the widths of each column to iterate over
the operands vertically.
