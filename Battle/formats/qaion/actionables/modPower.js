module.exports = (cxt, params = {}) => {
  console.log('here', cxt);
  cxt.power *= params.value;
};
