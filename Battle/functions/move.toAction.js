const calcDamage = require('./calcDamage.js');
const getMoveInfo = require('./getMoveInfo.js');

module.exports = (a, d, moveIndex) => {

  moveInfo = getMoveInfo(a.moves[moveIndex]);


  action = () => {
    d.HP -= calcDamage(a, d, moveInfo);
    console.log('did: ' + moveInfo.name);
    console.log(this.id);
  };

  action.phase = 'battle';
  action.priority = moveInfo.priority;
  action.remove = () => true;

  Object.defineProperty(action, 'spd', {
    get: () => a.spd
  });

  return action;
};
