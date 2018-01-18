const moveToAction = require('./functions/move.toAction.js');
const decideWinner = require('./functions/decideWinner.js');
const findNext = require('./functions/findNext.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    const guilmon = this.mons[0];
    const vulpix  = this.mons[1];

    this._actions = [];
    this._nextActionID = 0;

    while (!decideWinner(this.mons)) {
      this._actions.push(moveToAction(guilmon, vulpix, guilmon.moves[0]));

      let doAction = findNext(this, 'start');
      this._actions = [];
    }
  }

  get liveMons() { return this.mons.filter(mon => mon.HP > 0); }
};
