const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const move   = require('./Battle/functions/move.toAction.js');

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

const battle = new Battle([javi.party, durkee.party]);

while (!battle.victor) {
  console.log('Turn: ' + battle.turn);
  battle.addAction(move(guilmon, vulpix, 0)); // params: attacker, defender, move index (i.e. which mov)
  battle.addAction(move(vulpix, guilmon, 1));
  battle.ready();
}
console.log('Winner is ' + battle.victor);
