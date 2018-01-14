module.exports = class Battle {
  constructor(parties) {
    this.parties = parties;
    this.mons = parties.reduce(
      (acc, mon) => { acc.push(mon); return acc; },
      []
    );

    this.actions = [];

    console.log(this.mons);
  }
};
