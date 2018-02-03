module.exports = (battle) => {

  const endStart = () => {
    battle._phase = 'prep';
    battle.emit('prepPhaseStart');
  };

  endStart.name = 'end start phase';
  endStart.phase = 'start';
  endStart.priority = -1;
  endStart.remove = () => false;

  return endStart;
};
