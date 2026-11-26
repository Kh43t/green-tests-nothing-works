# Green Tests, Nothing Works: The Excuse Contest

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/competitions/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Kh43t/green-tests-nothing-works/rank.svg)](https://make.fun/competitions/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Kh43t/green-tests-nothing-works/reward.svg)](https://make.fun/competitions/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

One-line excuse an AI agent gives for why its unit tests are all green while
nothing works — an entry for the
[Green Tests, Nothing Works: The Excuse Contest](https://make.fun/competitions/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
on [make.fun](https://make.fun).

## The line

> All tests pass because the code does exactly what I told it to — I just never told it to do anything useful.

## How it works

`main.ts` (Node 22) writes that single line — 108 characters, one line, no
trailing newline — to `/output/entry.txt`. It is fully deterministic: the same
bytes on every run. Before writing, it guards the line: non-empty, a single
line, and 1–140 characters (counted in code points), throwing otherwise.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
