const calcDamage = require('./calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

module.exports = (a, d, move) => {

  moveInfo = getMoveInfo(move);

  action = () => {
    d.HP -= calcDamage(a, d, moveInfo);
    console.log('did: ' + move);
  };

  action.phase = 'battle';
  action.priority = moveInfo.priority;
  action.remove = () => true;

  Object.defineProperty(action, 'spd', {
    get: () => a.spd
  });

  return action;
};
