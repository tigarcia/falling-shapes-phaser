const game = new Phaser.Game(500, 500,
  Phaser.AUTO,
  document.getElementById("game"));

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('win', winState);

game.state.start('boot');