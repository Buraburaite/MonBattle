const Stats = require('./Stats.js');
const getBaseInfo = require('./functions/getBaseInfo.js');

module.exports =
class Mon {

  constructor(num, lvl, opt) {
    this.base = getBaseInfo(num);
    this.name = this.base.name;

    if (opt) {
      if (opt.catchable) { this.catchable = true; }
      if (opt.nickname)  { this.name  = opt.nickname; }
    }

    this.stats = new Stats(this.base, lvl);
  }

  stab(type) { return this.types.includes(type) ? 1.5 : 1; }

};
