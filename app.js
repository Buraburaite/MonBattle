const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const move   = require('./Battle/formats/qaion/Move/Move.js');

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
battle.on('prepPhaseStart', () => {
  console.log('(PREPPHASESTART)');
  battle.addAction(move(battle, guilmon, vulpix, 0)); // params: attacker, defender, move index (i.e. which mov)
  battle.addAction(move(battle, vulpix, guilmon, 1));
  battle.ready();
});
battle.on('Unpaused', () => {
  console.log('(Unpaused)');
});
battle.on('damageDealt', (user, target, damageDealt) => {
  console.log(`${user.name} did ${damageDealt} damage to ${target.name}`);
});
battle.on('endPhaseStart', () => {
  console.log('(ENDPHASESTART)');
});
battle.on('battleEnd', (victor) => {
  console.log(`${victor} has won the battle`);
});

battle.start();
