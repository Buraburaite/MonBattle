module.exports = mons => {
  const liveMons = mons.filter(mon => mon.HP > 0);
  for (let i = 1; i < liveMons.length; i++) {
    if (liveMons[i].player !== liveMons[0].player) {
      return null;
    }
  }
  
  return liveMons[0].player;
};
