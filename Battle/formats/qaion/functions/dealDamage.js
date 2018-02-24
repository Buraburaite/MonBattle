const calcDamage = require('./calcDamage.js');

module.exports = (cxt, opt = {}) => {

  const user = cxt.user;
  const target = cxt.target;
  const battle = cxt.battle;

  let damage;

  damage = (opt.value) ? opt.value : calcDamage(cxt);

  target.HP -= damage;
  battle.emit('Damage_Dealt', user, target, damage);
  if (target.HP <= 0) { battle.emit('Mon_Fainted', target); }
  return null;
};
