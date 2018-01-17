module.exports = (name) => {
  switch(name) {
    case 'Pyro Sphere':
    return {
      name: 'Pyro Sphere',
      kind: 'Special',
      type: 'FR',
      power: 8,
      priority: 0,
      after: (a, d, damageDealt) => {
        a.health -= Math.round(damageDealt / 3);
      }
    };
    case 'Growl':
    return;
    case 'Will-o-Wisp':
    return;
    case 'Hex':
    return;
  }
};
