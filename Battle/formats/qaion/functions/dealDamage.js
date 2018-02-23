const calcDamage = require('./calcDamage.js');

module.exports = (cxt, opt = {}) => {

  const user = cxt.user;
  const target = cxt.target;
  const battle = cxt.battle;
  let damage;

  damage = (opt.value) ? opt.value : calcDamage(cxt);

  target.HP -= damage;
  battle.emit('Damage_Dealt', user, target, damage);
  return null;
};
