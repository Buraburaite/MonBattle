const moveFactory = (user, name) => {

  const moveInfo = getMoveInfo(name);

  @Action({
    template: 'move',
    user: user,
    type: moveInfo.type,
    kind: moveInfo.kind,
    power: moveInfo.power
  });

  const move = (battle, name) => {
    battle.emit('moveStart', this);



    battle.emit('moveEnd', this);
  };

  return move;
};

return moveFactory;
