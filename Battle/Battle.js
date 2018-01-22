const moveToAction = require('./functions/move.toAction.js');
const triggerNext  = require('./functions/triggerNext.js');
const endStartPhase   = require('./functions/endStartPhase.action.js');
const endBattlePhase  = require('./functions/endBattlePhase.action.js');
const endEndPhase     = require('./functions/endEndPhase.action.js');

module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    this.victor = null;
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    this._turnCount= 1;
    this._phase = 'start';
    this._actions = [];
    this._nextActionID = 0;

    this.addAction(endStartPhase(this));
    this.addAction(endBattlePhase(this));
    this.addAction(endEndPhase(this));
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
