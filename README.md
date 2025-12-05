# Advent of Code 2025

https://adventofcode.com/2025

The goal for this year is to finish all the challenges. This should be easier
now that the number of challenges has been reduced to 12 this year. In service
of this goal, I am using TypeScript rather than trying to complete the
challenges in a language I am unfamiliar with. Learning new languages is fun,
but would likely add too much friction to me completing all challenges.

Not using LLMs to solve the problems directly, but still using them to ask
specific questions, such as "why doesn't TypeScript infer the correct return
type when I'm returning an object property with a narrowed type"?

This repo, the tests, and the code are not great examples of the best way to
structure a project. The structure of the repo is just enough to give me an
environment to solve the problems.

From https://adventofcode.com/2025/about#faq_num_days:

> *Should I use AI to solve Advent of Code puzzles?* No. If you send a friend to
> the gym on your behalf, would you expect to get stronger? Advent of Code
> puzzles are designed to be interesting for humans to solve - no consideration
> is made for whether AI can or cannot solve a puzzle. If you want practice
> prompting an AI, there are almost certainly better exercises elsewhere
> designed with that in mind.

## Running and testing solutions

```sh
bun run src/day01
bun test src/day01
```

