const moveFactory = (cxt) => {

  const move = () => {
    if (user.HP <= 0) { return null; }

    let n = 1;
    while (cxt['step' + 1]) {
      const step = require(`../functions/${cxt["step" + n]}.js`);

      step(cxt, cxt['params' + n]);
    }
  };

  move.isMove = true;
  move.cxt = cxt;
  move.user = cxt.user;
  move.target = cxt.target;
  move.phase = 'Move';
  move.priority = cxt.priority;
  move.remove = (cxt.remove) ? cxt.remove : () => true;

  return move;
};
