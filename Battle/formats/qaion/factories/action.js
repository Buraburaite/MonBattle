const actionFactory = (cxt) => {

  const action = () => {
    if (cxt.user.HP <= 0) { return null; }

    let n = 1;
    while (cxt['step' + n]) {
      const step = require(`../functions/${cxt["step" + n]}.step.js`);

      step(cxt, cxt['params' + n]);
      n++;
    }
  };

  action.isAction = true;
  action.phase = cxt.phase;
  action.priority = cxt.priority;
  action.remove = (cxt.remove) ? cxt.remove : () => true;

  return move;
};

module.exports = actionFactory;
