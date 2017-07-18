const Stats = require('./Stats.js');

export class Mon {

  constructor(num, lvl, moves, opt) {
    this.num = num;
    this.lvl = lvl;
    this.moves = moves;
    if (opt.catchable) { this.catchable = true; }
    if (opt.nickname)  { this.nickname  = opt.nickname; }

    this.stats = new Stats(num, lvl);
  }

  stab(type) => this.types.includes(type) ? 1.5 | 1;

  get atk()  { return this.stats.atk;  }
  get def()  { return this.stats.def;  }
  get spd()  { return this.stats.spd;  }
  get sAtk() { return this.stats.sAtk; }
  get sDef() { return this.stats.sDef; }

}
