module.exports = (cxt) => {

  const user = cxt.user;
  const target = cxt.target;
  let atk, def;
  if (cxt.kind === 'physical') {
    atk = user.atk;
    def = target.def;
  } else if (cxt.kind === 'special') {
    atk = user.sAtk;
    def = target.sDef;
  }

  const stab = user.types.includes(cxt.type) ? 1.5 : 1;

  return Math.round(
    Math.min(
      (
        (
          (
            (
              (2 * user.lvl) / 5
            ) + 2
          ) * cxt.power * atk/def
        ) / 50
      ) + 2 * stab,
      target.HP
    )
  );

};
