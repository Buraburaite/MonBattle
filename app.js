const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const Player = require('./Player/Player.js');

const guilmon = new Mon('D-366B', 25);
const vulpix = new Mon('P-396A', 25);

const javi = {
  name: 'Javimon',
  party: [guilmon]
};
const durkee = {
  name: 'Durkeemon',
  party: [vulpix]
};

const bat = new Battle([javi.party, durkee.party]);
