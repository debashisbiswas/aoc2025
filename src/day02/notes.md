Part 2 was a challenge. I tried to do a lot of math to get this right, but
eventually just reduced it down into an expanded version of part 1. There's a
balance between doing what works and coming up with the cleanest solution. I am
learning towards "doing what works" due to time constraints. In this case the
tradeoff is a bit less efficiency, but the input is only 4000 lines.

TDD was helpful but my resistance to objects held me back a bit. It would be
useful to model this problem with a "dial" object, tracking state through the
problem. You're doing this anyway, but implicitly because you're insistent on
passing raw data around rather than abstracting it in some way. Reading this
blog post afterwards was informative:
https://blog.jverkamp.com/2025/12/01/aoc-2025-day-1-turn-turn-turninator/

You don't need OOP for abstraction though. Even if you had used Elixir, you
could have used structs to model the dial.
