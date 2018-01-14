module.exports = (num) => {
  switch(num) {
    case 'D-366A':
    return {
      baseHP: 45,
      baseAtk: 83,
      baseSAtk: 83,
      baseSpd: 52,
      baseSDef: 41,
      baseDef: 41
    };
    case 'P-196A':
    return {
      baseHP: 38,
      baseAtk: 41,
      baseSAtk: 50,
      baseSpd: 65,
      baseSDef: 65,
      baseDef: 40
    };
  }
};
