let turnCount = 1;

module.exports = mons => {
  console.log('Turn: ', turnCount++);
  const liveMons = mons.filter(mon => mon.HP > 0);
  for (let i = 1; i < liveMons.length; i++) {
    if (liveMons[i].player !== liveMons[0].player) {
      return false;
    }
  }

  return liveMons[0].player;
};
