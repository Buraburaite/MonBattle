const calcDamage = require('../functions/calcDamage.js');

module.exports = (cxt, params = {}) => {

  const user = cxt.user;
  const target = cxt.target;
  const battle = cxt.battle;

  let damage;

  damage = (params.value) ? params.value : calcDamage(cxt);

  target.HP -= damage;
  battle.emit('Damage_Dealt', cxt, damage);
  if (target.HP <= 0) { battle.emit('Mon_Fainted', target); }
  return null;
};
