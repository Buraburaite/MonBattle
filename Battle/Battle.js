const triggerNextFactory = require('./factories/triggerNext.js');

class Battle {
  constructor(format, parties) {
    this.format = format;
    this.parties = parties;
    this.victor = null;

    const moveFactory = require(`./formats/${format}/${format}.move.js`);
    this.mons = [];
    parties.forEach(party => {
      party.forEach(mon => {
        mon.use = moveFactory(this, mon);
        this.mons.push(mon);
      });
    });

    this._phases = require(`./formats/${format}/${format}.phases.js`);
    this._phase = this._phases[0];
    this._turn = 0;

    this._triggerNext = triggerNextFactory(this);
    this._paused = false;
    this._actions = [];
    this._listeners = [];
    this._nextActionID = 0;
    this._nextListenerID = 0;
  }

  get turn() { return this._turn; }
  _incrementTurn() { this._turn++; }

  get phase() { return this._phase; }
  _incrementPhase() { this._phase = this.phase.next; }

  addAction(action) {
    action.id = this._newActionId();
    this._actions.push(action);
  }

  addListener(listener) {
    listener.id = this._newListenerId();
    this._listeners.push(listener);
  }

  unpause() {
    this.emit('Unpaused');
    this._paused = false;
    this._triggerNext();
  }

  start() {
    if (this.turn > 0) { return; }

    this._incrementTurn();
    this.emit('Battle_Start');
    this._triggerNext();
  }


  _newActionId() { return this._nextActionID++; }
}

require('event-emitter')(Battle.prototype);

module.exports = Battle;
