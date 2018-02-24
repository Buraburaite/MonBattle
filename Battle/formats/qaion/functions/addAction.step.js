module.exports = (cxt, opt = {}) => {

  cxt.battle.addAction(action);
};

/*
  const move = () => {
    if (cxt.user.HP <= 0) { return null; }

    let n = 1;
    while (cxt['step' + n]) {
      const step = require(`../functions/${cxt["step" + n]}.step.js`);

      step(cxt, cxt['params' + n]);
      n++;
    }
  };

  move.isMove = true;
  move.user = cxt.user;
  move.target = cxt.target;
  move.phase = cxt.phase;
  move.priority = cxt.priority;
  move.remove = (cxt.remove) ? cxt.remove : () => true;
  const move = moveFactory(cxt);
*/
