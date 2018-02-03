module.exports = (battle) => {

  const endBattlePhase = () => {
    battle._phase = 'end';
    battle.emit('endPhaseStart');
  };

  endBattlePhase.name = 'end battle phase';
  endBattlePhase.phase = 'battle';
  endBattlePhase.priority = -1;
  endBattlePhase.remove = () => false;

  return endBattlePhase;
};
