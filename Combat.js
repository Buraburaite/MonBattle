export class Combat {

  static eff = (atkType, defTypes) => {
    return 1;
  }

  constructor(user, targets, options) {
    this.user = user;
    if (typeof targets === Mon) {
      this.targets = [targets];
    } else {
      this.targets = targets;
    }
  }

  damage = (stat, type, power) => {
    const u = this.user;
    this.targets.forEach((t) => {
      t.cHP -=
      (
        (
          ((2 * u.lvl / 5) + 2) *
          power *
          (stat === 'Physical' ? u.atk | u.sAtk) /
          (stat === 'Physical' ? t.def | u.sDef) /
          50
        ) +
        2
      ) *
      (1.5 * u.types.includes(type)) * // STAB modifier
      eff(type, t.types)
    });
  }

  return this;
}