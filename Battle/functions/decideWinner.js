let turnCount = 1;

module.exports = mons => {
  console.log('Turn: ', turnCount++);
  const liveMons = mons.filter(mon => mon.HP > 0);
  for (let i = 1; i < liveMons.length; i++) {
    if (liveMons[i].player !== liveMons[0].player) {
      return false;
    }
  }

  const victor = liveMons[0].player;
  console.log(victor);
  return victor;
};
