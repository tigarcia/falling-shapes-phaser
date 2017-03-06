class Preload extends Phaser.State {
  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.stage.backgroundColor = '#eee';
  }

  create() {
    this.game.state.start('Menu'); 
  }
}

export default Preload;
