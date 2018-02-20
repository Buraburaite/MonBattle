const Stats = require('./Stats.js');
const getBaseInfo = require('./functions/getBaseInfo.js');

class Mon {

  constructor(num, lvl, player, opt) {
    this.num = num;
    this.lvl = lvl;
    this.player = player;
    this._base = getBaseInfo(num);
    this.name = this._base.name;

    if (opt) {
      if (opt.catchable) { this.catchable = true; }
      if (opt.nickname)  { this.name  = opt.nickname; }
    }

    this._stats = new Stats(this._base, lvl);
  }

  get moves() { return this._base.moves; }
  get types() { return this._base.types; }
  get HP()    { return this._stats.HP; }
  set HP(newHP) { this._stats.HP = Math.max(newHP, 0); }
  get atk()   { return this._stats.atk; }
  get sAtk()  { return this._stats.sAtk; }
  get spd()   { return this._stats.spd; }
  get sDef()  { return this._stats.sDef; }
  get def()   { return this._stats.def; }

}

require('event-emitter')(Mon.prototype);

module.exports = Mon;
