const decideWinner = require('./decideWinner.js');

module.exports = (battle) => {

  const endEnd = () => {
    battle.victor = decideWinner(battle.mons);
    battle._turnCount++;
    battle._phase = 'start';
  };

  endEnd.name = 'end end phase';
  endEnd.phase = 'end';
  endEnd.priority = -1;
  endEnd.remove = () => false;

  return endEnd;
};
