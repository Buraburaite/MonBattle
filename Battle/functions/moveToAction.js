const calcDamage = require('./calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

module.exports = (a, d, move) => {

  moveInfo = getMoveInfo(move);

  action = () => {
    d.HP -= calcDamage(a, d, moveInfo);
    console.log('did: ' + move);
  };

  action.type = 'Move';
  action.name = moveInfo.name;
  action.priority = moveInfo.priority;

  Object.defineProperty(action, 'spd', {
    get: () => a.spd
  });

  return action;
};
