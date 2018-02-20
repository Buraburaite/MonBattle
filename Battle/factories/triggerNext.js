const triggerNextFactory = (battle) => {

  const format = battle.format;
  const phases = battle._phases;

  const triggerNext = () => {

    // First, escape if the the battle is paused...
    if (battle.paused) { return null; }

    // If not, then start by limiting our search to actions in the current phase...
    let phase   = battle._phase;
    const forActionsInTheCurrentPhase = action => action.phase === phase.name;
    let actions = battle._actions.filter(forActionsInTheCurrentPhase);

    // ...while there are no actions to call in the phase...
    while (actions.length === 0) {
      // ...if there is a special function for the end of the phase, call it...
      if (phase.endFunc) { phase.endFunc(battle); }
      // ...check if we got paused...
      if (battle.paused) { return null; } // because endFunc may have paused us

      // ...if not, move on to the next phase...
      phase = phase.next;
      battle._phase = phase;
      battle.emit(`${phase.name}_Phase_Start`);

      // ...if this pause starts paused, escape...
      if (phase.pause) {
        battle.paused = true;
        return null;
      }

      // ...otherwise, find the actions for the new phase...
      actions = battle._actions.filter(forActionsInTheCurrentPhase);
    }

    // Since we have found actions, sort them...
    if (phase.priorityFunc) { actions.sort(phase.priorityFunc); }
    else                    { actions.sort((a,b) => b.priority - a.priority); }

    // ...select the first action...
    const next = actions[0];
    // ...remove it from the action pool depending on its removal condition...
    if (next.remove()) { battle._actions = battle._actions.filter(a => a.id !== next.id); }
    // ...trigger it...
    actions[0]();

    // ...and finally, recurse.
    triggerNext(battle);
  };

  return triggerNext;
};

module.exports = triggerNextFactory;
