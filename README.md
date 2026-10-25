# Circumcision Lab

A standalone Godot research simulation for adult circumcision tissue manipulation and auditable low-level model control. It includes original layered anatomy, bilateral instruments, constrained tissue deformation, swept cutting, component tracking, synthetic edge attachments, a frozen evaluator, actual rendered observations, and preserved successful and unsuccessful experiments.

**Research release — `v0.1.0`.** All three declared independent cases (seeds 11, 29 and 83) passed the unchanged synthetic C0 gates under one published round-seven configuration. GPT-6 Astra selected each low-level action in a fresh context, using actual Godot observations. Private originals and public exports reproduce exactly in offline verification. This completes the bounded engineering benchmark; it does not establish clinical validity or generalization.

## Run locally

Requirements: Godot4 and Node.js22 or newer. The recorded graphical checks use Godot4.7.2, Node26.5.0 and macOS/Apple Silicon. No package installation, API key or network service is required for manual simulation or recorded playback.

```sh
git clone https://github.com/CPTM511/circumcision-lab.git
cd circumcision-lab
node launch.mjs
```

On macOS, double-click **Start.command**. Set `GODOT_BIN` to the Godot executable if it is not detected. `node launch.mjs --compatibility` selects the Compatibility renderer; Forward+ is the default. The local service uses `127.0.0.1:8785`; set `ANATOMY_PORT` to change it.

The launcher opens the inspector without starting model inference. Orbit and zoom the scene, inspect anatomical layers, choose a specimen seed, then select **Reset mechanics sandbox** for bilateral movement, orientation, grasp, cutting and attachment controls. **Replay recorded example** replays a short two-move connectivity record using new Godot frames, without model inference. **Stop execution** revokes the active lease. **Start C0 procedure** explicitly initiates a fresh model-controlled episode and requires the matching frozen configuration.

Actual model control is a separate, explicitly initiated workflow requiring the compatible authenticated Codex app-server described in [controller setup](procedures/circumcision/docs/CONTROLLER.md). Historical records identify `gpt-6-astra` and `xhigh`; availability depends on the local host. Missing access or an unavailable model fails closed. This release ships no scheduled jobs and does not automatically start evaluations.

## Evidence and current status

| Round7 seed | Accepted actions | Actual observations | Maximum feedback latency | Result |
| --- | ---: | ---: | ---: | --- |
|11|136|202|2,833ms|All C0 gates and Finish passed|
|29|163|244|2,984ms|All C0 gates and Finish passed|
|83|128|224|3,234ms|All C0 gates and Finish passed|

The declared set passed **3/3**, with 670 actual observations and no operator intervention or runtime changes during the set. Seed29 removed 0.277822% non-target area, within the unchanged 1% limit; it is not a zero-off-target result. See [round7 results](docs/ROUND7_EVALUATION.md) and [acceptance evidence](docs/RELEASE_ACCEPTANCE.md).

The full history remains visible: **11 ended attempts, five successful and six unsuccessful**, plus one externally interrupted episode. Earlier successes are separate from this round's three-case acceptance. [Historical evaluation](procedures/circumcision/evidence/EVALUATION.md), failed trajectories, original observations, [contact-correction validation](procedures/circumcision/evidence/evaluation-rounds/round6-validation/METHOD.md) and the interrupted round-six record are retained. Scripted engineering tests are not counted as model successes.

[Open the latest complete successful episode](replays/latest-complete-model-episode.html) as a downloaded HTML file in a browser. It contains all **224** original observations from round7 seed83. This is an accelerated frame-sequence replay, not continuous screen video or a new simulation run. The [previous complete replay](replays/round5-seed29-complete.html) and [interrupted replay](replays/latest-paused-model-episode.html) remain available.

## Architecture and reproducibility

The complete implementation lives in `procedures/circumcision/`; this internal layout is retained for archived runtime imports. All required shared code is included in this repository. **No Vessel Lab checkout is required.** Root entry points launch only this module. Archived round1–6 runtimes and public evidence remain byte-identical; historical results are never silently transferred to new source.

```sh
node verify-import.mjs
cd procedures/circumcision
node --test tests/*.test.mjs
node verify-controller.mjs evidence/c0-round7-seed83-attempt01
node verify-controller.mjs evidence/c0-round5-seed83-attempt01 --incomplete
node verify-contact-projection.mjs
```

Full replay and regression checks can take several minutes. They do not perform model inference. See [standalone validation](docs/STANDALONE_VALIDATION.md), [provenance](provenance/README.md), [mechanics](procedures/circumcision/docs/MECHANICS.md), [evaluator](procedures/circumcision/docs/EVALUATOR.md), and [anatomy/asset sources](procedures/circumcision/docs/ANATOMY_AND_ASSETS.md).

## Research boundaries

Visual realism, mechanical fidelity and clinical validity are distinct. Materials and anatomy are procedurally authored; no patient photographs or third-party meshes are bundled. Contact is sampled, material behavior is uncalibrated, and large deformation can produce unrealistic crumpling. The complete successful examples use passive authored recoil for edge proximity: they do **not** demonstrate surgical suturing. Synthetic local attachments are an experimental primitive. There is no clinical validation, operative completeness claim or patient-use capability.

Contributions should preserve failed records, distinguish scripted tests/playback from live decisions, and bind results to exact source and instructions. Changes to runtime or controller contracts require fresh evaluation; never relax acceptance thresholds to make a recorded case pass.

## License and origin

MIT. Extracted from the adult module of [Vessel Lab](https://github.com/CPTM511/vessel-lab/tree/1213844e51354416b0f0a1b45d3d91c4dff67127/procedures/circumcision). Original attribution and historical references are preserved. Vessel-suturing v1 remains a separate project and is not included here.
