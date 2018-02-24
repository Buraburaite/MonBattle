module.exports = class Stats {

  constructor(base, lvl) {

    this.lvl = lvl;

    const calcStat = (baseStat, lvl) => {
      return Math.round(
        (
          Math.floor(
            (
              2 * baseStat * lvl
            ) / 100
          ) + 5
        ) / 10
      );
    };
    this.maxHP = Math.round(
      Math.floor(
        (
          (
            2 * base.baseAtk * lvl
          ) / 100
        ) + lvl + 10
      ) / 10
    );
    this.HP    = this.maxHP;
    this.SD    = 1; // obviously update once you know the formula
    this.vAtk  = calcStat(base.baseAtk, lvl); // vanilla Atk
    this.vSAtk = calcStat(base.baseSAtk, lvl);
    this.vSpd  = calcStat(base.baseSpd, lvl);
    this.vSDef = calcStat(base.baseSDef, lvl);
    this.vDef  = calcStat(base.baseDef, lvl);

    this.atkMods = [{
      name: 'hacks',
      value: 2
    }];
    this.sAtkMods = [];
    this.spdMods = [];
    this.sDefMods = [];
    this.defMods = [];
  }

  productOf(stat, mods) {
    return mods.reduce(
      (product, mod) => product * mod.value,
      stat
    );
  }

  get atk()  { return this.productOf(this.vAtk,  this.atkMods);  }
  get sAtk() { return this.productOf(this.vSAtk, this.sAtkMods); }
  get spd()  { return this.productOf(this.vSpd,  this.spdMods);  }
  get sDef() { return this.productOf(this.vSDef, this.sDefMods); }
  get def()  { return this.productOf(this.vDef,  this.defMods);  }
};
