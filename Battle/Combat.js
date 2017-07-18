export class Combat {

  static eff = (atkType, defTypes) => {
    defTypes = (typeof defTypes === Array) ? defTypes : [defTypes];
    return 1;
  }

  constructor(user, targets, opt) {
    this.user = user;
    targets = (typeof targets === Array) ? targets : [targets];
  }

  damage = (stat, type, power) => {
    const u = this.user;
    this.targets.forEach((t) => {
      t.cHP -=
      (
        (
          ((2 * u.lvl / 5) + 2) *
          power *
          (stat === 'Physical' ? u.atk : u.sAtk) /
          (stat === 'Physical' ? t.def : u.sDef) /
          50
        ) +
        2
      ) *
      u.stab(type) *     // STAB modifier
      eff(type, t.types) // type effectiveness modifier
    });
    return this;
  }

}
