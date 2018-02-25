let csv = require('fs').readFileSync(__dirname + '/../csv/moves.csv', 'utf-8');
csv = require('papaparse').parse(csv, {
  header: true,
  dynamicTyping: true
});

const parse = (v) => {
  if (typeof(v) === 'string' && v[0] === '{') {
    return JSON.parse(v);
  } else { return { value: v }; }
};

// console.log(csv.data[0]);


let line;
module.exports = (name) => {

  const forNameMatch = line => line.name === name;
  line = csv.data.filter(forNameMatch)[0];

  // console.log(name, line);

  let info = {
    name: (line.name) ? line.name : null,
    kind: (line.kind) ? line.kind : null,
    type: (line.type) ? line.type : null,
    power: (line.power) ? line.power : null,
    phase: (line.phase) ? line.phase : 'Move',
    priority: (line.priority) ? line.priority : 0,
    remove: (line.remove) ? line.remove : () => true,
    step1: (line.step1) ? line.step1 : null,
    params1: (line.params1) ? parse(line.params1) : {},
    step2: (line.step2) ? line.step2 : null,
    params2: (line.params2) ? parse(line.params2) : {},
    step3: (line.step3) ? line.step3 : null,
    params3: (line.params3) ? parse(line.params3) : {},
    step4: (line.step4) ? line.step4 : null,
    params4: (line.params4) ? parse(line.params4) : {},
    step5: (line.step5) ? line.step5 : null,
    params5: (line.params5) ? parse(line.params5) : {},
  };

  // console.log(info);
  return info;
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
