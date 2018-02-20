const calcDamage = require('../functions/calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

class Move {

  constructor(battle, user, target, moveIndex) {

    this.isMove = true;
    this.user = user;
    this.target = target;
    this.moveInfo = getMoveInfo(user.moves[moveIndex]);

    const action = () => {
      const damage = calcDamage(user, target, moveInfo);
      target.HP -= damage;
      battle.emit('damageDealt', user, target, damage);
    };

    action.phase = 'move';
    action.priority = moveInfo.priority;
    action.remove = () => true;

    Object.defineProperty(action, 'spd', {
      get: () => user.spd
    });

    this.call = action; // turns this instance into an action
  }
}

module.exports = Move;
