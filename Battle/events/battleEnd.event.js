module.exports = (battle) => {
  battle.on('battleEnd', (victor) => {
    console.log(`Winner is ${victor}`);
  });
};
