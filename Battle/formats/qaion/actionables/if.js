module.exports = (cxt, params = {}) => {
  let stop = false;

  if (params.hasAilment) {
    let ailment = params.hasAilment;
    if (
      (ailment === true && cxt.target.ailment) ||
      (typeof(ailment) === 'string' && cxt.target.ailment === ailment)
    ) {
      stop = true;
    }

  }

  if (stop) { cxt.stopStepping = true; }
};
