const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const Player = require('./Player/Player.js');

const guilmon = new Mon('D-366A', 25);
const minun = new Mon('P-196A', 25);

const javi = {
  name: 'Javimon',
  party: [guilmon]
};
const durkee = {
  name: 'Durkeemon',
  party: [minun]
};

const bat = new Battle([javi.party, durkee.party]);
