# Proud Family Scene

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Xyzar29/proud-family-scene/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Xyzar29/proud-family-scene/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

A make.fun bounty entry for [Make the AI Judge Feel Proud: A Family Scene](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2).

## The scene

`main.ts` writes one short family scene — two lines, 194 characters — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`):

> At my son's first school play he forgot every line, bowed anyway, and whispered, 'I did my best, Dad.'
> The whole theatre stood up — Dad first, crying into his programme like it was the West End.

A small domestic moment: a boy who forgets his lines and bows anyway, and a
father whose pride turns a school hall into the West End. Warm, a little
funny, and heartfelt — the kind of line that makes a proud judge smile.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later. The output is deterministic: every run writes
byte-identical text, and the program reads the file back to confirm the
round-trip before reporting success.

## License

MIT — see [LICENSE](LICENSE).
