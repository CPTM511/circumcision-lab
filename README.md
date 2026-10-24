# Circumcision Lab

A standalone Godot research simulation for adult circumcision tissue manipulation and auditable low-level model control. It includes original layered anatomy, bilateral instruments, constrained tissue deformation, swept cutting, component tracking, synthetic edge attachments, a frozen evaluator, actual rendered observations, and preserved successful and unsuccessful experiments.

**Research preview — `v0.1.0-preview.1`.** Two complete independent episodes passed the synthetic C0 gates under the round-five runtime; the third failed detached-component collection. A targeted contact projection correction has since been verified and frozen. Independent evaluation of that correction is incomplete: round-six seed11 was interrupted after16 actions and28 observations; seeds29/83 have not run. This release establishes a standalone runnable package, not completion of the three-case acceptance set or clinical validity.

## Run locally

Requirements: Godot4 and Node.js22 or newer. The recorded graphical checks use Godot4.7.2, Node26.5.0 and macOS/Apple Silicon. No package installation, API key or network service is required for manual simulation or recorded playback.

```sh
git clone https://github.com/CPTM511/circumcision-lab.git
cd circumcision-lab
node launch.mjs
```

On macOS, double-click **Start.command**. Set `GODOT_BIN` to the Godot executable if it is not detected. `node launch.mjs --compatibility` selects the Compatibility renderer; Forward+ is the default. The local service uses `127.0.0.1:8785`; set `ANATOMY_PORT` to change it.

The launcher opens the inspector without starting model inference. The standalone UI is branded Circumcision Lab. Those two title changes invalidate the historical source freeze, so **Start C0 procedure** remains disabled until a future explicit preflight/freeze. No new freeze or model episode was created for this release. Orbit and zoom the scene, inspect anatomical layers, choose a specimen seed, then select **Reset mechanics sandbox** to use bilateral movement, orientation, grasp, cutting and attachment controls. **Replay recorded example** replays a short two-move connectivity record using new Godot frames, without model inference. **Stop execution** revokes the active lease.

Actual model control is a separate, explicitly initiated workflow requiring the compatible authenticated Codex app-server described in [controller setup](procedures/circumcision/docs/CONTROLLER.md). Historical records identify `gpt-6-astra` and `xhigh`; availability depends on the local host. Missing access or an unavailable model fails closed. This preview ships no scheduled jobs and does not automatically start evaluations.

## Evidence and current status

| Evidence | Result | Interpretation |
| --- | --- | --- |
| Round5 seed11 | 165 actions,221 actual images; C0 and Finish passed | Historical independent success |
| Round5 seed29 | 96 actions,132 actual images; C0 and Finish passed | Historical independent success |
| Round5 seed83 | 160 actions,210 actual images; collection failed | Preserved independent failure |
| Contact correction | Exact-state counterfactuals;228 actual scripted collection frames; all synthetic gates passed | Engineering validation, not a new model success |
| Round6 seed11 |16 actions,28 actual images; externally interrupted | Incomplete, neither success nor completed failure |

The full denominator before round6 is **eight ended attempts: two successful and six unsuccessful**, including infrastructure and frame-deadline failures. The interrupted ninth attempt is preserved separately. See [evaluation history](procedures/circumcision/evidence/EVALUATION.md), [correction methods](procedures/circumcision/evidence/evaluation-rounds/round6-validation/METHOD.md), [freeze](procedures/circumcision/evaluation-freeze.json), and [interrupted record](procedures/circumcision/evidence/c0-round6-seed11-owner-paused/agent.jsonl).

[Open the latest complete successful episode](replays/latest-complete-model-episode.html) as a downloaded HTML file in a browser. It preserves all132 original Godot observation frames. It is an accelerated frame-sequence replay, not continuous screen video or a new simulation run. A [separate interrupted replay](replays/latest-paused-model-episode.html) preserves round-six observations.

## Architecture and reproducibility

The complete implementation lives in `procedures/circumcision/`; this internal layout is retained for archived runtime imports. All required shared code is included in this repository. **No Vessel Lab checkout is required.** Root entry points launch only this module. Archived round1–6 runtimes and public evidence remain byte-identical; historical results are never silently transferred to new source.

```sh
node verify-import.mjs
cd procedures/circumcision
node --test tests/*.test.mjs
node verify-controller.mjs evidence/c0-round5-seed29-attempt01
node verify-controller.mjs evidence/c0-round5-seed83-attempt01 --incomplete
node verify-contact-projection.mjs
```

Full replay and regression checks can take several minutes. They do not perform model inference. See [standalone validation](docs/STANDALONE_VALIDATION.md), [provenance](provenance/README.md), [mechanics](procedures/circumcision/docs/MECHANICS.md), [evaluator](procedures/circumcision/docs/EVALUATOR.md), and [anatomy/asset sources](procedures/circumcision/docs/ANATOMY_AND_ASSETS.md).

## Research boundaries

Visual realism, mechanical fidelity and clinical validity are distinct. Materials and anatomy are procedurally authored; no patient photographs or third-party meshes are bundled. Contact is sampled, material behavior is uncalibrated, and large deformation can produce unrealistic crumpling. The complete successful examples use passive authored recoil for edge proximity: they do **not** demonstrate surgical suturing. Synthetic local attachments are an experimental primitive. There is no clinical validation, operative completeness claim or patient-use capability.

Contributions should preserve failed records, distinguish scripted tests/playback from live decisions, and bind results to exact source and instructions. Changes to runtime or controller contracts require fresh evaluation; never relax acceptance thresholds to make a recorded case pass.

## License and origin

MIT. Extracted from the adult module of [Vessel Lab](https://github.com/CPTM511/vessel-lab/tree/1213844e51354416b0f0a1b45d3d91c4dff67127/procedures/circumcision). Original attribution and historical references are preserved. Vessel-suturing v1 remains a separate project and is not included here.
