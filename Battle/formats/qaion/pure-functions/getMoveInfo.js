module.exports = (name) => {
  switch(name) {
    case 'Pyro Sphere':
    return {
      name: 'Pyro Sphere',
      kind: 'special',
      type: 'FR',
      power: 8,
      priority: 0,
      remove: null,
      step1:'dealDamage',
      params1: {}
    };
    case 'Growl':
    return;
    case 'Will-o-Wisp':
    return;
    case 'Hex':
    return {
      name: 'Hex',
      kind: 'special',
      type: 'GH',
      power: 6,
      priority: 0,
      remove: null,
      step1:'dealDamage',
      params1: {}
    };
  }
};
