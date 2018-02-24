const moveFactory = (cxt) => {

  const move = () => {
    if (cxt.user.HP <= 0) { return null; }

    let n = 1;
    while (cxt['step' + n]) {
      const step = require(`../functions/${cxt["step" + n]}.js`);

      step(cxt, cxt['params' + n]);
      n++;
    }
  };

  move.isMove = true;
  move.user = cxt.user;
  move.target = cxt.target;
  move.phase = 'Move';
  move.priority = cxt.priority;
  move.remove = (cxt.remove) ? cxt.remove : () => true;

  return move;
};

module.exports = moveFactory;
