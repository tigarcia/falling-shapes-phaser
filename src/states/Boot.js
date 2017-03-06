class Boot extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start('Preload');
  }
}

export default Boot;