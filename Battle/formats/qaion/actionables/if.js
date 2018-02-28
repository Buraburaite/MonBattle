module.exports = (cxt, params = {}) => {
  let stop = true;

  switch(params.value) {
    case 'targetHasAilment':
    if (cxt.target.ailment) { stop = false; }
    return;
  }

  if (stop) { cxt.stopStepping = false; }
};
