module.exports = (actions) => {
  let next = actions[0];
  for (let i = 1; i <= actions.length; i++) {
    
    if (actions.type !== 'Move') {
      console.log('actions error 1');
      return null;
    }

    if (
      actions[i].priority > next.priority ||
      actions[i].spd > next.spd
    ) {
      next = actions[i];
      continue;
    }
  }

  return next;
};
