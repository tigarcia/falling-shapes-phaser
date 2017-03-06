class GameOver extends Phaser.State = {
  score: undefined,

  init(score) {
    this.score = score;
  },

  create() {
    alert(this.score);
  }
}

export default GameOver;