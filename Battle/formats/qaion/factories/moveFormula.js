const formulaToMove = (cxt) => {

  let n = 1;
  while (cxt['step' + 1]) {
    const step = require(`../functions/${cxt["step" + n]}.js`);

    step(cxt, cxt['params' + n]);
  }

  console.log(formula);
};

formulaToMove({
  name: 'Tackle',
  kind: 'physical',
  power: 4,
  type: 'NR',
  priority: 0,
  remove: null,
  step1: 'dealDamage',
  params1: {}
})();
