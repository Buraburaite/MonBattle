const calcDamage = require('./calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

module.exports = (a, d, moveIndex) => {

  const moveInfo = getMoveInfo(a.moves[moveIndex]);

  action = () => {
    const damage = calcDamage(a, d, moveInfo);
    d.HP -= damage;
    console.log(`${a.name} used ${moveInfo.name} on ${d.name}, damage: ${damage}`);
  };

  action.phase = 'battle';
  action.priority = moveInfo.priority;
  action.remove = () => true;

  Object.defineProperty(action, 'spd', {
    get: () => a.spd
  });

  return action;
};
