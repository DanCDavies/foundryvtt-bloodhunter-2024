Hooks.once("init", () => {
  CONFIG.DND5E.spellcasting["profane-soul"] = {
    label: "Profane Soul",
    type: "single",
    cantrips: true,
    prepares: true,
    order: 15,
    img: "icons/magic/unholy/silhouette-robe-evil-power.webp",
    table: {
      3:  { slots: 1, level: 1 },
      6:  { slots: 2, level: 1 },
      7:  { slots: 2, level: 2 },
      13: { slots: 2, level: 3 },
      19: { slots: 2, level: 4 }
    },
    progression: {
      "profane-soul": {
        label: "Profane Soul",
        divisor: 1
      }
    }
  };

  CONFIG.DND5E.restTypes.short.recoverSpellSlotTypes.add("profane-soul");
  CONFIG.DND5E.restTypes.long.recoverSpellSlotTypes.add("profane-soul");
});
