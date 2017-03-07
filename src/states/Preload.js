class Preload extends Phaser.State {
  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.minWidth = 320;
    this.game.scale.minHeight = 320;
    this.game.scale.maxWidth = 1200;
    this.game.scale.maxHeight = 1200;

    this.game.stage.backgroundColor = '#eee';

    this.game.load.image('arrow-up', 'arrow-up.png');
    this.game.load.image('arrow-down', 'arrow-down.png');
    this.game.load.image('arrow-left', 'arrow-left.png');
    this.game.load.image('arrow-right', 'arrow-right.png');
  }

  create() {
    this.game.state.start('Menu'); 
  }
}

export default Preload;
