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

// dev: add logs to events
require('./Battle/formats/qaion/qaion.logging.js')(battle);

battle.on('Prep_Phase_Start', () => {
  guilmon.use(0, vulpix); // params: moveIndex, target (eventually target will be a fieldIndex)
  vulpix.use(1, guilmon);
  battle.unpause();
});

battle.start();
