module.exports = (battle) => {
  battle.on('Battle_Start', () => {
    console.log('(Battle_Start)');
  });
  battle.on('Unpaused', () => {
    console.log('(Unpaused)');
  });
  battle.on('Damage_Dealt', (moveCxt, damageDealt) => {
    console.log(`(Damage_Dealt): ${moveCxt.user.name} did ${damageDealt} damage to ${moveCxt.target.name} with ${moveCxt.name}`);
  });
  battle.on('Start_Phase_Start', () => {
    console.log(`___(Start_Phase_Start): Turn ${battle.turn}___`);
  });
  battle.on('Prep_Phase_Start', () => {
    console.log('(Prep_Phase_Start)');
  });
  battle.on('Move_Phase_Start', () => {
    console.log('(Move_Phase_Start)');
  });
  battle.on('End_Phase_Start', () => {
    console.log('(End_Phase_Start)');
  });
  battle.on('Battle_End', (victor) => {
    console.log(`(Battle_End): ${victor} has won the battle`);
  });

  battle.on('Mon_Fainted', (mon) => {
    console.log(`(Mon_Fainted): ${mon.name} has fainted!`);
  });
};
