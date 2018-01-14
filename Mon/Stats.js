const parser = require('papaparse');

module.exports = class Stats {

  constructor(num, lvl) {

    this.base = {
      // atk:
    };

    this.maxHP = 20;
    this.vAtk = 5; // vanilla Atk
    this.vSAtk = 5;
    this.vSpd = 5;
    this.vSDef = 5;
    this.vDef = 5;

    this.atkMods = [{
      name: 'hacks',
      value: 2
    }];
    this.sAtkMods = [];
    this.spdMods = [];
    this.sDefMons = [];
    this.defMods = [];
  }

  productOf(stat, mods) {
    return this.mods.reduce(
      (product, mod) => {
        return product * mod.value;
      },
      stat
    );
  }

  get atk()  { return this.productOf(this.atk,  this.atkMods);  }
  get sAtk() { return this.productOf(this.sAtk, this.sAtkMods); }
  get spd()  { return this.productOf(this.spd,  this.spdMods);  }
  get sDef() { return this.productOf(this.sDef, this.sDefMods); }
  get def()  { return this.productOf(this.def,  this.defMods);  }
};
