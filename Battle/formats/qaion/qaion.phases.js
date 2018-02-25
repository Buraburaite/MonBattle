const endEnd = (battle) => { // this should be moved to triggerNext
  battle._incrementTurn();
};

const comparePriorityInMovePhase = (a,b) => {
  if (a.priority === b.priority) { return b.user.spd - a.user.spd; }
  else                           { return b.priority - a.priority; }
};


const phases = [
  {
    name: 'Start'
  },
  {
    name: 'Prep',
    pause: true
  },
  {
    name: 'Move',
    priorityFunc: comparePriorityInMovePhase
  },
  {
    name: 'End',
    endFunc: endEnd
  }
];

// Turn phases into a singly linked list
for (let i = 0; i < phases.length - 1; i++) {
  phases[i].next = phases[i + 1];
}
phases[phases.length - 1].next = phases[0];

module.exports = phases;
