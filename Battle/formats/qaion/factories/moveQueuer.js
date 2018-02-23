const getMoveInfo = require('../pure-functions/getMoveInfo.js');

const calcDamage = require('../functions/calcDamage.js');

const moveQueuerFactory = (battle, user) => {

  const moveQueuer = (moveIndex, target) => {

    moveInfo = getMoveInfo(user.moves[moveIndex]);

    const action = () => {

      if (user.HP <= 0) { return null; }

      // This next part needs to be turned into csv programmable magic
      const damage = calcDamage(user, target, moveInfo);
      target.HP -= damage;
      battle.emit('Damage_Dealt', user, target, damage);
      if (target.HP <= 0) { battle.emit('Mon_Fainted', target); }
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
