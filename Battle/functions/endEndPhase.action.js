const decideWinner = require('./decideWinner.js');

module.exports = (battle) => {

  const endEnd = () => {
    const victor = decideWinner(battle.mons);
    if (victor) {
      battle.emit('battleEnd', victor);
      battle._paused = true;
      return null;
    }

    battle._turnCount++;
    battle._phase = 'start';
  };

  endEnd.name = 'end end phase';
  endEnd.phase = 'end';
  endEnd.priority = -1;
  endEnd.remove = () => false;

  return endEnd;
};
