class GameOver extends Phaser.State {

  init(score) {
    this.score = score;
  }

  create() {
    alert(this.score);
  }
}

export default GameOver;
