# Deploying Blood Hunter (2024) Module

## Detected Paths

- **Docker compose**: `/opt/docker/gaming/docker-compose.yml`
- **Host data directory**: `/opt/docker/gaming/foundryvtt-data`
- **Modules directory**: `/opt/docker/gaming/foundryvtt-data/Data/modules/`
- **dnd5e version**: 5.3.3
- **Foundry core compatibility**: minimum 13.347, verified 14

## Build

```bash
cd foundryvtt-bloodhunter-2024
npm install
npm run build
```

## Deploy

Copy the module into the Foundry modules directory:

```bash
rsync -av --delete \
  --exclude='src/' \
  --exclude='node_modules/' \
  --exclude='.build-tmp/' \
  --exclude='package.json' \
  --exclude='package-lock.json' \
  --exclude='build.mjs' \
  --exclude='.gitignore' \
  --exclude='source/' \
  --exclude='prompt.md' \
  --exclude='.pdf/' \
  --exclude='DEPLOY.md' \
  /home/dan/code/personal/foundryvtt-bloodhunter-2024/ \
  /opt/docker/gaming/foundryvtt-data/Data/modules/blood-hunter-2024/
```

Then restart Foundry (or reload the world) and enable the module in the world settings.

## What Gets Deployed

- `module.json` — module manifest
- `packs/blood-hunter-2024/` — compiled LevelDB compendium (74 items + 28 Active Effects)
- `scripts/profane-soul-spellcasting.mjs` — custom spellcasting progression for the Profane Soul subclass

## Active Effects

The module includes wired Active Effects for automatic stat changes:

### Always-on (transfer on item grant)
- **Dark Augmentation** — +10 speed, +INT mod (min 1) to STR/DEX/CON saves
- **Stalker's Prowess** — +10 speed

### Toggled (player activates via activity)
- **Hybrid Transformation** — BPS resistance, +1 AC, +1 melee damage, advantage on STR checks/saves (1 hr duration). Damage increases to +2 at L11, +3 at L18 — adjust the effect value manually.

### Enchantments (applied to held weapon)
- **Crimson Rite** — Rite of the Flame/Frozen/Storm (fire/cold/lightning + magical property)
- **Esoteric Rite** — Rite of the Dead/Oracle/Roar (necrotic/psychic/thunder + magical property)
- All rites add Hemocraft Die damage via `@scale.blood-hunter.hemocraft-die`

### Mutagen Formulas (toggled)
19 of 20 formulas have effects. Items with Foundry Notes explain what must be tracked manually (e.g., Precision's crit threshold, Cruelty's extra attack). Vermilion has no effect (extra Blood Maledict use is un-expressible as an AE; death save disadvantage is wireable via `system.attributes.death.roll.mode` but was left manual).

### Optional Modules
No hard dependencies beyond dnd5e 5.x. For richer automation, consider:
- **DAE (Dynamic Active Effects)** — enables complex conditional effects
- **Times-Up** — automatic effect expiration based on combat rounds
