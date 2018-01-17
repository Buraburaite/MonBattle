const moveToAction = require('./functions/moveToAction.js');
const decideWinner = require('./functions/decideWinner.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    const guilmon = this.mons[0];
    const vulpix  = this.mons[1];

    this.actions = [];

    while (!decideWinner(this.mons)) {
      this.actions.push(moveToAction(guilmon, vulpix, guilmon.moves[0]));

      this.actions[0]();
      this.actions = [];
    }
  }

  get liveMons() { return this.mons.filter(mon => mon.HP > 0); }
};
