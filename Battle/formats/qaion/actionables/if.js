module.exports = (cxt, params = {}) => {
  let skipNext = true;

  switch(params.value) {
    case 'targetHasAilment':
    if (cxt.target.ailment) { skipNext = false; }
    break;
  }

  cxt.skipNext = skipNext;
};
