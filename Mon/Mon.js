const Stats = require('./Stats.js');
const getBaseInfo = require('./functions/getBaseInfo.js');

module.exports =
class Mon {

  constructor(num, lvl, opt) {
    this._base = getBaseInfo(num);
    this.name = this._base.name;
    this.num = num;
    this.lvl = lvl;

    if (opt) {
      if (opt.catchable) { this.catchable = true; }
      if (opt.nickname)  { this.name  = opt.nickname; }
    }

    this._stats = new Stats(this._base, lvl);
  }

  get moves() { return this.base.moves; }
  get types() { return this.base.types; }
  get atk()   { return this._stats.atk; }
  get sAtk()  { return this._stats.sAtk; }
  get spd()   { return this._stats.spd; }
  get sDef()  { return this._stats.sDef; }
  get def()   { return this._stats.def; }

};
