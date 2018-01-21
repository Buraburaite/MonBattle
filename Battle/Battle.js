const moveToAction = require('./functions/move.toAction.js');
const decideWinner = require('./functions/decideWinner.js');
const popNext = require('./functions/popNext.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    const guilmon = this.mons[0];
    const vulpix  = this.mons[1];

    this._turnCount= 1;
    this._phase = 'start';
    this._actions = [];
    this._nextActionID = 0;

    const notNext = a => a.id !== next.id;
    while (!decideWinner(this.mons)) {
      this.addAction(moveToAction(guilmon, vulpix, guilmon.moves[0], this._newActionId()));
      this.addAction(moveToAction(vulpix, guilmon, vulpix.moves[1],  this._newActionId()));

      let currentTurn = this._turnCount;
      while (currentTurn === this._turnCount) {
        if (this._phase === 'prep') { this._phase = 'battle'; }
        const next = popNext(this);
        if (next) { next(); }
      }
    }
  }

  get turn() { return this._turnCount; }
  get liveMons() { return this.mons.filter(mon => mon.HP > 0); }

  _newActionId() { return this._nextActionID++; }
  addAction(action) { this._actions.push(action); }
};
