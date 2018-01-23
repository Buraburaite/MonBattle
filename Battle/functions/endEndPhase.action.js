const decideWinner = require('./decideWinner.js');

module.exports = (battle) => {

  const endEnd = () => {
    const victor = decideWinner(battle.mons);
    if (victor) {
      battle.trigger('battleEnd', victor);
      return null;
    } // TODO: have this trigger battleEnd event

    battle._turnCount++;
    battle._phase = 'start';
  };

  endEnd.name = 'end end phase';
  endEnd.phase = 'end';
  endEnd.priority = -1;
  endEnd.remove = () => false;

  return endEnd;
};
