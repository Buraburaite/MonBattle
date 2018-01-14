const Stats = require('./Stats.js');
const getBaseInfo = require('../Battle/functions/getBaseInfo.js');

module.exports =
class Mon {

  constructor(num, lvl, opt) {
    this.num = num;
    this.lvl = lvl;
    this.base = getBaseInfo(num);

    if (opt) {
      if (opt.catchable) { this.catchable = true; }
      if (opt.nickname)  { this.nickname  = opt.nickname; }
    }

    this.stats = new Stats(this.base, lvl);
  }

  stab(type) { return this.types.includes(type) ? 1.5 : 1; }

  get atk()  { return this.stats.atk;  }
  get def()  { return this.stats.def;  }
  get spd()  { return this.stats.spd;  }
  get sAtk() { return this.stats.sAtk; }
  get sDef() { return this.stats.sDef; }

};
