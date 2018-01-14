const moveToAction = require('./functions/moveToAction.js');
const decideWinner = require('./functions/decideWinner.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    this.actions = [];

    console.log(this.mons);
    while (!decideWinner(this.mons)) {
      this.mons[0].HP--;

    }
  }

  get liveMons() { return this.mons.filter(mon => mon.HP > 0); }
};
