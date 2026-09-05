{
  # Table fork of Scenery (marcstraube v3.0.0, Foundry 14) carrying the
  # scene-levels fix. The package is the COMMITTED dist/ — built by
  # `pnpm build` from the same commit's src/, so provenance is
  # src commit -> dist commit -> flake pin. The checkPhase is the divergence
  # gate: it asserts the carried fix is present in the shipped bundle, so a
  # rebase or rebuild that silently drops it is undeployable, not just wrong.
  description = "Scenery — table fork for Foundry 14 scene levels";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-darwin" ];
      forAll = f: nixpkgs.lib.genAttrs systems (s: f nixpkgs.legacyPackages.${s});
    in
    {
      packages = forAll (pkgs: rec {
        scenery = pkgs.stdenvNoCC.mkDerivation {
          pname = "scenery";
          version = "3.0.0+table.1";
          src = self;
          dontBuild = true;
          doCheck = true;
          checkPhase = ''
            bundle=dist/scenery.js
            fail=0
            need() { grep -qF "$1" "$bundle" || { echo "MISSING (fix dropped): $1"; fail=1; }; }
            # scene-levels guard: only the first level's background is Scenery's to touch.
            # Two sites (setImage + reset); the guard line must appear twice.
            n=$(grep -cF "level.id !== " "$bundle" || true)
            [ "$n" -ge 2 ] || { echo "MISSING (fix dropped): level guard present $n time(s), need 2"; fail=1; }
            need "firstLevel"
            test -f module.json || { echo "module.json missing"; fail=1; }
            grep -qF '"version": "3.0.0+table.1"' module.json || { echo "module.json version mismatch"; fail=1; }
            [ "$fail" = 0 ] || exit 1
            echo "all carried fixes present in dist bundle"
          '';
          installPhase = ''
            mkdir -p $out
            cp -r module.json dist templates languages LICENSE README.md TABLE-FORK.md $out/
          '';
        };
        default = scenery;
      });
    };
}
