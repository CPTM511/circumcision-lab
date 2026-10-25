# Standalone round7 independent evaluation

Frozen and published at `eb48b3b971d17ceda85c6d7ad4b2affcbc71d3c6` before all episodes. Runtime digest `2ed44bf0f82aeffa32fd9a23914bc1998df62e2f15a2c972948deb419be46598`; unchanged C0 thresholds and model/tool contract. Declared seeds11,29,83 require3/3 independent successes under this source. Current result: **3/3 verified; bounded C0 acceptance complete**.

| Seed | Result | Accepted moves | Actual images | Maximum command-to-frame latency |
| --- | --- | ---: | ---: | ---: |
|11|All C0 gates and Finish passed; natural model completion|136|202|2,833ms|
|29|All C0 gates and Finish passed; natural model completion|163|244|2,984ms|
|83|All C0 gates and Finish passed; natural model completion|128|224|3,234ms|

Seed11 used exactly GPT-6 Astra / xhigh in a fresh context and reset. Target detachment100%, off-target removal0%, protected-volume intersections0,48/48 wound-edge samples within1mm, released hold5.0117 simulated seconds, no invalid retained faces or unresolved target components at Finish. Zero rejected commands. A transient retained-face integrity flag during manipulation is preserved in the journal; it was absent after detachment and at acceptance. No intervention or runtime changes occurred during the episode.

The private original and sanitized public export both reproduce all states and image associations exactly. Private execution-authorization checks passed; private host metadata is excluded from public records. [Decisions and actual observations](../procedures/circumcision/evidence/c0-round7-seed11-attempt01/agent.jsonl), [public verification](../procedures/circumcision/evidence/c0-round7-seed11-attempt01-verification.json).

Historical denominator remains visible: before this round, eight ended attempts(two successes,six unsuccessful) and one externally interrupted episode. Including these results: eleven ended attempts,five successes,six unsuccessful,plus the separate interruption. Historical successes are separate from this round's three independent cases. This small synthetic benchmark does not establish clinical validity, generalization, realistic suturing or calibrated tissue mechanics.

```sh
node procedures/circumcision/verify-controller.mjs procedures/circumcision/evidence/c0-round7-seed11-attempt01
```

## Seed29

Fresh independent GPT-6 Astra / xhigh context completed163 actions and244 actual observations, with zero rejected commands. Target detachment100%, protected-volume intersections0, non-target area removed0.277822%(within the unchanged1% maximum),47/48 edge samples within tolerance, released hold5.0167 seconds, no invalid retained faces or unresolved components at Finish. The first release/collection adjustment is preserved. Both private original and public export reproduce exactly; all actual feedback meets5000ms.

[Decisions and images](../procedures/circumcision/evidence/c0-round7-seed29-attempt01/agent.jsonl), [verification](../procedures/circumcision/evidence/c0-round7-seed29-attempt01-verification.json). This result is not described as zero off-target removal.

## Seed83 and final result

Fresh independent GPT-6 Astra / xhigh context completed 128 actions and 224 actual observations. Target detachment100%, non-target removal0%, protected-volume intersections0,48/48 edge samples within tolerance, released hold5.0150 simulated seconds, no invalid retained faces or unresolved components at Finish. Both private and public strict replay pass. All three contexts completed naturally with accepted Finish, zero rejected commands and every accepted change followed by an associated actual frame within5000ms. The source, model instructions, tool contract and acceptance thresholds did not change between cases.

[Decisions and images](../procedures/circumcision/evidence/c0-round7-seed83-attempt01/agent.jsonl), [verification](../procedures/circumcision/evidence/c0-round7-seed83-attempt01-verification.json), [complete observation replay](../replays/latest-complete-model-episode.html).
