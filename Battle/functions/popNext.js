module.exports = (battle) => {

  // First, limit search to actions in the current phase...
  const phase   = battle._phase;
  const actions = battle._actions.filter(a => a.phase === phase);
  console.log(phase + ' phase');

  // ...if no actions remain for this phase, advance to next phase...
  if (actions.length === 0) {
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
    return null;
  }

  // ...otherwise, sort the actions...
  let sortFunction;
  if (phase === 'battle') {
    sortFunction = (a,b) => {
      if (a.priority !== b.priority) { return b.priority - a.priority; }
      return b.spd - a.spd;
    };
  } else { sortFunction = (a,b) => b.priority - a.priority; }
  actions.sort(sortFunction);


  // ...select the next action...
  const next = actions[0];
  // ...remove it from the action pool depending on its removal condition...
  if (next.remove()) { battle._actions = battle._actions.filter(a => a.id !== next.id); }
  // ...then return the first action.
  return actions[0];
};
