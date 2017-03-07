import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Menu from 'states/Menu';
import Main from 'states/Main';
import GameOver from 'states/GameOver';

class Game extends Phaser.Game {

  constructor() {
    super(500, 500, //window.innerWidth * window.devicePixelRatio * .75,
          //window.innerHeight * window.devicePixelRatio * .75,
          Phaser.AUTO);

    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Menu', Menu, false);
    this.state.add('Main', Main, false);
    this.state.add('GameOver', GameOver, false);

    this.state.start('Boot');
  }

}

new Game();
