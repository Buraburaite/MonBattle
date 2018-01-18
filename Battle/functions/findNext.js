module.exports = (battle) => {
  const actions = battle._actions;
  const phase = battle._phase;

  // limit to actions in the current phase
  const poss = actions.filter(act => act.phase === phase);

  // sort actions
  switch(phase) {
    case 'start':
    console.log('start phase');
    poss.sort((a,b) => b.priority - a.priority);
    break;
    case 'battle':
    console.log('battle phase');
    poss.sort((a,b) => {
      if (a.priority === b.priority) { return b.spd - a.spd; }
      return b.priority - a.priority;
    });
    break;
    case 'end':
    console.log('end phase');
    poss.sort((a,b) => b.priority - a.priority);
    break;
  }

  // advance phase if done
  let result;
  if (poss.length === 0) {
    result = null;
    switch(phase) {
      case 'start':
      battle._phase = 'prep';
      break;
      case 'battle':
      battle._phase = 'end';
      break;
      case 'end':
      battle._phase = 'start';
      battle._turnCount++;
      break;
    }
  }
  // otherwise, do the action and check removal condition
  else {
    result = poss[0];
    if (result.remove()) { actions.shift(); }
  }
  return result;
};
