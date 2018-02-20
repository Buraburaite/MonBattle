const triggerNextFactory = (battle) => {

  const format = battle.format;
  const phases = battle._phases;

  const triggerNext = () => {

    // First, escape if the the battle is paused...
    if (battle._paused) { return null; }

    // If not, then start by limiting our search to actions in the current phase...
    let phase   = battle._phase;
    const forActionsInTheCurrentPhase = action => action.phase === phase.name;
    let actions = battle._actions.filter(forActionsInTheCurrentPhase);

    // ...while there are no actions to call in the phase, move to the next phase...
    while (actions.length === 0) {
      phase = phase.next;
      battle._phase = phase;
      battle.emit(`${phase.name}_Phase_Start`);
      actions = battle._actions.filter(forActionsInTheCurrentPhase);
    }

    // ...otherwise, sort the actions...
    if (phase.priorityFunc) { actions.sort(phase.priorityFunc); }
    else                    { actions.sort((a,b) => b.priority - a.priority); }

    // ...select the next action...
    const next = actions[0];
    // ...remove it from the action pool depending on its removal condition...
    if (next.remove()) { battle._actions = battle._actions.filter(a => a.id !== next.id); }
    // ...then trigger the first action...
    actions[0]();

    // ...finally, recurse.
    triggerNext(battle);
  };

  return triggerNext;
};

module.exports = triggerNextFactory;
