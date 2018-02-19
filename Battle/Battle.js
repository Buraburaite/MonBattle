const ee = require('event-emitter');
const moveToAction = require('./functions/move.toAction.js');
const triggerNext  = require('./functions/triggerNext.js');
const endStartPhase   = require('./functions/endStartPhase.action.js');
const endMovePhase  = require('./functions/endMovePhase.action.js');
const endEndPhase     = require('./functions/endEndPhase.action.js');

class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = [];
    this.victor = null;
    parties.forEach(party => {
      party.forEach(mon => this.mons.push(mon));
    });

    this._phase = 'start';
    this._actions = [];
    this._nextActionID = 0;
    this._paused = false;

    this.addAction(endStartPhase(this));
    this.addAction(endMovePhase(this));
    this.addAction(endEndPhase(this));
  }

  get turn() { return this._turnCount; }

  addAction(action) {
    action.id = this._newActionId();
    this._actions.push(action);
  }

  ready() {
    this._phase = 'move';
    this.emit('ready');
    this._paused = false;
    triggerNext(this);
  }

  start() {
    if (this._turnCount) { return; }
    this._turnCount= 1;
    this._phase = 'start';
    this.emit('battleStart');
    triggerNext(this);
  }


  _newActionId() { return this._nextActionID++; }
}

ee(Battle.prototype);

module.exports = Battle;
