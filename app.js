const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');

const guilmon = new Mon('D-366B', 25, 'Javimon');
const vulpix = new Mon('P-396A', 25, 'Durkeemon');

const javi = {
  name: 'Javimon',
  party: [guilmon]
};
const durkee = {
  name: 'Durkeemon',
  party: [vulpix]
};

const battle = new Battle('qaion', [javi.party, durkee.party]);

battle.on('Battle_Start', () => {
  console.log('(Battle_Start)');
});
battle.on('Prep_Phase_Start', () => {
  console.log('(Prep_Phase_Start)');
  guilmon.use(0, vulpix); // params: moveIndex, target (eventually target will be a fieldIndex)
  vulpix.use(1, guilmon);
  battle.unpause();
});
battle.on('Unpaused', () => {
  console.log('(Unpaused)');
});
battle.on('Damage_Dealt', (user, target, damageDealt) => {
  console.log(`${user.name} did ${damageDealt} damage to ${target.name}`);
});
battle.on('Start_Phase_Start', () => {
  console.log('(Start_Phase_Start)');
});
battle.on('Move_Phase_Start', () => {
  console.log('(Move_Phase_Start)');
});
battle.on('End_Phase_Start', () => {
  console.log('(End_Phase_Start)');
});
battle.on('Battle_End', (victor) => {
  console.log(`(Battle_End): ${victor} has won the battle`);
});

battle.start();
