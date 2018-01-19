const Battle = require('./Battle/Battle.js');
const Mon    = require('./Mon/Mon.js');
const Player = require('./Player/Player.js');

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

/*====
bat.onPrep(() => {
// select moves
bat.addAction(moveToAction(guilmon, vulpix, guilmon.moves[0]));
bat.addAction(moveToAction(vulpix, guilmon, vulpix.moves[0]));

// end Prep phase
bat.ready();
});
====*/
