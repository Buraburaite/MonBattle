const getMoveInfo = require('../functions/getMoveInfo.js');

const calcDamage = require('../functions/calcDamage.js');

const moveQueuerFactory = (battle, user) => {

  const moveQueuer = (moveIndex, target) => {

    moveInfo = getMoveInfo(user.moves[moveIndex]);

    const action = () => {

      if (user.HP <= 0) { return null; }

      const damage = calcDamage(user, target, moveInfo);
      target.HP -= damage;
      battle.emit('Damage_Dealt', user, target, damage);
    };

    action.isMove = true;
    action.user = user;
    action.target = target;
    action.phase = 'Move';
    action.priority = moveInfo.priority;
    action.remove = () => true;

    battle.addAction(action);
  };

  return moveQueuer;
};

module.exports = moveQueuerFactory;
