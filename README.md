# Blood Hunter (2024)

A Foundry VTT compendium module for the **Blood Hunter** class, updated to the 2024 Player's Handbook rules. Based on the original class by Matthew Mercer.

Includes all four Orders (Ghostslayer, Lycan, Mutant, Profane Soul), 12 blood curses, 20 mutagen formulas, and full Active Effects wiring for passive bonuses, Hybrid Transformation, Crimson Rite enchantments, and mutagen stat changes.

## Requirements

- Foundry VTT v13.347+ (verified on v14)
- dnd5e system 5.0.0+ (verified on 5.3.3)

## Installation

In Foundry VTT, go to **Add-on Modules → Install Module** and paste:

```
https://github.com/__GH_USER__/foundryvtt-bloodhunter-2024/releases/latest/download/module.json
```

## Usage

1. Enable the module in your world settings.
2. Open the **Blood Hunter (2024)** compendium and drag the Blood Hunter class onto a character.
3. Choose your Order at level 3 via the subclass advancement.
4. Blood curses and mutagen formulas are granted/chosen via class and subclass advancements.

**Profane Soul spellcasting** is handled by a bundled script that registers a custom Pact Magic–style progression. Spell slots recover on short rest automatically.

### Manual tracking

Some features include a **Foundry Note** (visible to GMs in the item description) where automation is partial:

- Hybrid Transformation melee damage scales at L11/L18 — adjust the effect value manually.
- Mutagen ability boosts scale at L11/L18 — adjust both the value and max in the effect.
- Precision (crit threshold), Cruelty (extra attack), and Vermilion (extra Blood Maledict use) require manual tracking.

## Legal / Fan Content

This is unofficial fan content permitted under the Fan Content Policy. Not approved/endorsed by Wizards of the Coast.

- **Blood Hunter** created by Matthew Mercer. Original content © Matthew Mercer / Critical Role.
- **Dungeons & Dragons** © Wizards of the Coast.
- 2024 rules terminology derives from the System Reference Document 5.2, released under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.
- Shared free of charge; may not be sold.
- Permitted under [Wizards of the Coast's Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy).

## License

Build tooling and workflow scripts (build.mjs, .github/) are released under the [MIT License](LICENSE). Game content is fan content — see attribution above.
