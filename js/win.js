var winState = {
  score: undefined,

  init(score) {
    this.score = score;
  },

  create() {
    alert(this.score);
  }
};