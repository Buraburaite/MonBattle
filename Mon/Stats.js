export class Stats {

  constructor(num, lvl) {
    this.maxHP = 20;
    this.vAtk = 5;
    this.vDef = 5;
    this.vSpd = 5;
    this.vSAtk = 5;
    this.vSDef = 5;
    this.atkMods = [{
      name: 'hacks',
      value: 2
    }];
    this.defMons = [];
    this.spdMods = [];
    this.sAtkMods = [];
    this.sDefMons = [];
  }

  const productOf(stat, mods) => {
    return mods.reduce(
      (product, mod) => {
        return product * mod.value
      },
      stat
    );
  }

  get atk()  { return productOf(this.atk,  this.atkMods);  }
  get def()  { return productOf(this.def,  this.defMods);  }
  get spd()  { return productOf(this.spd,  this.spdMods);  }
  get sAtk() { return productOf(this.sAtk, this.sAtkMods); }
  get sDef() { return productOf(this.sDef, this.sDefMods); }
}
