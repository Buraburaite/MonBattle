module.exports = (a, d, move) => {

  let atk, def;
  if (move.kind === 'Physical') {
    atk = a.atk;
    def = b.def;
  } else if (move.kind === 'Special') {
    atk = a.sAtk;
    def = b.sDef;
  }

  const stab = a.types.includes(move.type) ? 1.5 : 1;

  return Math.min(
    (
      (
        (
          (
            (2 * a.lvl) / 5
          ) + 2
        ) * move.power * atk/def
      ) / 50
    ) + 2 * stab,
    b.HP
  );

};
