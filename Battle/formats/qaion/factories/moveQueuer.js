const getMoveInfo = require('../functions/getMoveInfo.js');

const calcDamage = require('../functions/calcDamage.js');

const moveQueuerFactory = (battle, user) => {

  const moveQueuer = (moveIndex, target) => {

    moveInfo = getMoveInfo(user.moves[moveIndex]);

    const action = () => {
      const damage = calcDamage(user, target, moveInfo);
      target.HP -= damage;
      battle.emit('damageDealt', user, target, damage);
    };

    action.isMove = true;
    action.phase = 'move';
    action.priority = moveInfo.priority;
    action.remove = () => true;

    battle.addAction(action);
  };

  return moveQueuer;
};

module.exports = moveQueuerFactory;
