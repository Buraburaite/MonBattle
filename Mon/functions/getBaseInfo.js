module.exports = num => {
  switch(num) {
    case 'D-366B':
    return {
      name: 'Guilmon',
      num: 'D-366B',
      rank: 'R',
      types: ['FR', 'DG'],
      moves: ['Pyro Sphere', 'Dragon Rage'],
      baseHP: 45,
      baseAtk: 83,
      baseSAtk: 83,
      baseSpd: 52,
      baseSDef: 41,
      baseDef: 41
    };
    case 'P-396A':
    return {
      name: 'Vulpix',
      num: 'P-396A',
      rank: 'R',
      types: ['FR'],
      moves: ['Will-o-Wisp', 'Hex', 'Fake Pyro Sphere'],
      baseHP: 38,
      baseAtk: 41,
      baseSAtk: 50,
      baseSpd: 65,
      baseSDef: 65,
      baseDef: 40
    };

    default: return;
  }
};
