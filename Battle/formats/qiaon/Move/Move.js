const calcDamage = require('./calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

module.exports = (battle, user, target, moveIndex) => {

  const moveInfo = getMoveInfo(user.moves[moveIndex]);

  action = () => {
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

  return action;
};
