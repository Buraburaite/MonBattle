module.exports = (battle) => {

  const endMovePhase = () => {
    battle._phase = 'end';
    battle.emit('endPhaseStart');
  };

  endMovePhase.name = 'end move phase';
  endMovePhase.phase = 'move';
  endMovePhase.priority = -1;
  endMovePhase.remove = () => false;

  return endMovePhase;
};
