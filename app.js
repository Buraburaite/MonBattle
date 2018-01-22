const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const Player = require('./Player/Player.js');
const decideWinner = require('./Battle/functions/decideWinner.js');
const move = require('./Battle/functions/move.toAction.js');

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

const bat = new Battle([javi.party, durkee.party]);

while (!decideWinner(bat.mons)) {
  bat.addAction(move(guilmon, vulpix, 0));
  bat.addAction(move(vulpix, guilmon, 1));
  bat.ready();
}
