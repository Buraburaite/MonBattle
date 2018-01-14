const calcDamage = require('./calcDamage.js');

module.exports = (a, d, move) => {

  return () => {
    b.HP -= calcDamage(a, d, move);
  };
};
