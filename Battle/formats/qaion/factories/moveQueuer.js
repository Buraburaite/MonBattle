const getMoveInfo = require('../pure-functions/getMoveInfo.js');
const moveFactory = require('./move.js');

const moveQueuerFactory = (battle, user) => {

  const moveQueuer = (moveIndex, target) => {

    const cxt = getMoveInfo(user.moves[moveIndex]);
    cxt.battle = battle;
    cxt.user = user;
    cxt.target = target;

    const move = moveFactory(cxt);

    battle.addAction(move);
  };

  return moveQueuer;
};

module.exports = moveQueuerFactory;
