[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/zxpast/makefun-robot-apology-20261125/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/zxpast/makefun-robot-apology-20261125/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

**Referral code: `6hmpy1rq`**

# The Robot Apology

A make.fun entry for [The Robot Apology](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59): a program that writes one two-line robot confession to `/output/entry.txt`.

- Line 1: the robot apologizes in one sentence for one specific mistake — it overwrote your wedding vows with the shopping list, because both files were called `final` and it picked the shorter one.
- Line 2: the lesson that follows from that exact mistake — it now reads the first line before saving over anything, and never trusts a file just because its name sounds finished.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Node 22, standard library only. Deterministic, no network. `main.ts` also self-checks the house gate before writing: UTF-8, 1–400 characters, exactly 2 lines, exactly one sentence per line.

## Files

- `main.ts`: the entry program.
- `LICENSE`: MIT.
