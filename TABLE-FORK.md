# Table fork (JoeLuker, branch `table`)

Based on upstream v3.0.0 (marcstraube/foundryvtt-scenery, commit 0aa97e41). Carried fixes:

- **Scene levels (Foundry 14).** `Scenery.setImage` and the background reset assigned
  `canvas.primary.background.texture`; in v14 that property is the *viewed* level's mesh,
  so every level of a multi-level scene was painted with the first level's image. Both
  paths now return unless the viewed level is the scene's first level (2026-09-04).

`dist/` is committed on this branch, built by `pnpm build` from the same commit's `src/`.
`flake.nix` packages the committed dist and its checkPhase asserts the fix is present in the
shipped bundle. Internal fork: nothing here is filed upstream.
