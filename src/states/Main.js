class Main extends Phaser.State {
  fallingShape: undefined,
  score: 0,
  scoreText: undefined,
  timeText: undefined,

  setupFallingShape() {
    this.game.physics.enable(this.fallingShape, Phaser.ARCADE);
    this.fallingShape.body.velocity.set(0, 70);
    this.fallingShape.checkWorldBounds = true;

    this.fallingShape.events.onOutOfBounds.add(function(shape){
      this.fallingShape.kill();
      this.score--;
      this.updateScore();
      this.fallingShape = this.createRandomShape();
      this.setupFallingShape();
    }, this);
  },

  handleKeyUp(e) {
    if (e.keyCode == Phaser.Keyboard.UP ||
        e.keyCode == Phaser.Keyboard.DOWN ||
        e.keyCode == Phaser.Keyboard.LEFT ||
        e.keyCode == Phaser.Keyboard.RIGHT) {
      let correct = false;
      if (e.keyCode == Phaser.Keyboard.LEFT) {
        if (color === 0xFF0000 && isCircle) {
          correct = true;
        }
      } else if (e.keyCode == Phaser.Keyboard.RIGHT) {
        if (color === 0x000000 && isCircle) {
          correct = true;
        }
      } else if (e.keyCode == Phaser.Keyboard.UP) {
        if (color === 0xFF0000 && !isCircle) {
          correct = true;
        }
      } else if (e.keyCode == Phaser.Keyboard.DOWN) {
        if (color === 0x000000 && !isCircle) {
          correct = true;
        }
      }
      if (correct) {
        this.fallingShape.kill();
        this.fallingShape = this.createRandomShape();
        this.setupFallingShape();
        this.score++;
      } else {
        this.score--;
      }
      this.updateScore();

    }
  },

  createRandomShape() {
    isCircle = Math.floor(Math.random() * 2) > 0;
    color = [0xFF0000 /*red*/, 0x000000/*black*/][Math.floor(Math.random() * 2)];
    let shapeSprite;
    let shape;
    let height = this.game.world.height * (Math.random() * 0.4 + .3);
    let width = this.game.world.width * (Math.random() * 0.4 + .3);
    if (isCircle) {
      shape = this.game.add.graphics(width, height);
      shape.beginFill(color);
      shape.drawCircle(0,30,60);
    } else {
      shape = this.game.add.graphics(width, height);
      shape.beginFill(color);
      shape.drawRect(0,0,60,60);
    }
    shapeSprite = this.game.add.sprite(0, 0);
    shapeSprite.addChild(shape);
    shapeSprite.anchor.set(0.5,0.5);
    return shape;
  },

  updateScore() {
    this.scoreText.setText(`score: ${this.score}`);
  },

  done() {
    this.game.state.start('GameOver', true, false, this.score);
  },

  create() {
    this.fallingShape = this.createRandomShape();
    this.setupFallingShape(this.fallingShape);
    let styles = {font: "20px Arial",fill: "#ff0044"}
    this.scoreText = this.game.add.text(this.game.world.width-100, 10,
                    `score: ${this.score}`, styles);
    this.timeText = this.game.add.text(this.game.world.width-100, 34,
                    `time:   20`, styles);

    this.game.input.keyboard.onUpCallback = this.handleKeyUp.bind(this);
    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.done, this);
  },

  render() {
    this.timeText.setText(`time:   ${Math.floor(this.game.time.events.duration/1000)}`);
  }
}

export default Main;