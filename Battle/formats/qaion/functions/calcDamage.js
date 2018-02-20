module.exports = (a, d, moveInfo) => {

  let atk, def;
  if (moveInfo.kind === 'Physical') {
    atk = a.atk;
    def = d.def;
  } else if (moveInfo.kind === 'Special') {
    atk = a.sAtk;
    def = d.sDef;
  }

  const stab = a.types.includes(moveInfo.type) ? 1.5 : 1;

  return Math.round(
    Math.min(
      (
        (
          (
            (
              (2 * a.lvl) / 5
            ) + 2
          ) * moveInfo.power * atk/def
        ) / 50
      ) + 2 * stab,
      d.HP
    )
  );

};
