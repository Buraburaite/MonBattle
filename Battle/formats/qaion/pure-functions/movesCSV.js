let csv = require('fs').readFileSync(__dirname + '/../csv/moves.csv', 'utf-8');
csv = require('papaparse').parse(csv, {
header: true,
dynamicTyping: true
});

console.log(csv);

module.exports = (name) => {

};


// module.exports = (name) => {
//   switch(name) {
//     case 'Pyro Sphere':
//     return {
//       name: 'Pyro Sphere',
//       kind: 'special',
//       type: 'FR',
//       power: 8,
//       phase: 'Move',
//       priority: 0,
//       remove: null,
//       step1:'dealDamage',
//       params1: {}
//     };
//     case 'Dragon Rage':
//     return {
//       name: 'Dragon Rage',
//       kind: 'special',
//       type: 'DG',
//       power: null,
//       phase: 'Move',
//       priority: 0,
//       remove: null,
//       step1:'dealDamage',
//       params1: { value: 4 }
//     };
//     case 'Will-o-Wisp':
//     return;
//     case 'Hex':
//     return {
//       name: 'Hex',
//       kind: 'special',
//       type: 'GH',
//       power: 6,
//       phase: 'Move',
//       priority: 0,
//       remove: null,
//       step1:'dealDamage',
//       params1: {}
//     };
//     case 'Fire Spin':
//     return {
//       name: 'Fire Spin',
//       kind: 'special',
//       type: 'FR',
//       power: 4,
//       phase: 'Move',
//       priority: 0,
//       remove: null,
//       step1:'dealDamage',
//       params1: {}
//     };
//     case 'Fire Spin*damage':
//     return {
//       name: 'Fire Spin*damage',
//       phase: 'End',
//       priority: 0,
//       remove: null,
//       step1:'dealDamage',
//       params1: { value: target.SD }
//     };
//   }
// };
