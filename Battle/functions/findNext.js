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
  if (poss.length === 0) {
    switch(phase) {
      case 'start':
      battle._phase = 'prep';
      break;
      case 'battle':
      battle._phase = 'end';
      break;
      case 'end':
      battle._phase = 'start';
      break;
    }
  }
  // otherwise, do the action and check removal condition
  else {
    poss[0]();
    if (poss.remove()) { actions.shift(); }
  }
};
