const decideVictor = require('../functions/decideVictor.js');

const endEnd = (battle) => {
  const victor = decideVictor(battle.mons);
  if (victor) {
    battle.emit('battleEnd', victor);
    battle._paused = true;
    return null;
  }

  battle._incrementTurn();
};

const compareMovePriority = (a,b) => {
  if (a.priority !== b.priority) { return b.priority - a.priority; }
  return b.user.spd - a.user.spd;
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
    priorityFunc: compareMovePriority
  },
  {
    name: 'End',
    end: endEnd
  }
];

for (let i = 0; i < phases.length - 1; i++) {
  phases[i].next = phases[i + 1];
}
phases[phases.length - 1].next = phases[0];
