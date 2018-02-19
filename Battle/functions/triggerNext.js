const triggerNext = (battle) => {

  // First, scape if the the battle is paused...
  if (battle._paused) { return null; }

  // If not, then start by limiting our search to actions in the current phase...
  const phase   = battle._phase;
  const actions = battle._actions.filter(a => a.phase === phase);



  // ...otherwise, sort the actions...
  let sortFunction;
  if (phase === 'move') {
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
  // ...then trigger the first action...
  actions[0]();

  // ...finally, recurse.
  triggerNext(battle);
};

module.exports = triggerNext;
