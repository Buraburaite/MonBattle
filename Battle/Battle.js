const moveToAction = require('./functions/move.toAction.js');
const triggerNext = require('./functions/triggerNext.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    this._turnCount= 1;
    this._phase = 'start';
    this._actions = [];
    this._nextActionID = 0;
  }

  get turn() { return this._turnCount; }

  addAction(action) {
    action.id = this._newActionId();
    this._actions.push(action);
  }
  ready() {
    this._phase = 'battle';
    triggerNext(this);
  }


  _newActionId() { return this._nextActionID++; }
};
