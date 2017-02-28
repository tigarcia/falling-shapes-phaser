const game = new Phaser.Game(500, 500,
  Phaser.AUTO,
  document.getElementById("game"),
  {preload, create, update});

let fallingShape,
    cursors,
    color,
    isCircle,
    scoreText,
    score;
function createRandomShape() {
  isCircle = Math.floor(Math.random() * 2) > 0;
  color = [0xFF0000 /*red*/, 0x000000/*black*/][Math.floor(Math.random() * 2)];
  let shapeSprite;
  let shape;
  let height = game.world.height * (Math.random() * 0.4 + .3);
  let width = game.world.width * (Math.random() * 0.4 + .3);
  if (isCircle) {
    shape = game.add.graphics(width, height);
    shape.beginFill(color);
    shape.drawCircle(0,30,60);
  } else {
    shape = game.add.graphics(width, height);
    shape.beginFill(color);
    shape.drawRect(0,0,60,60);
  }
  shapeSprite = game.add.sprite(0, 0);
  shapeSprite.addChild(shape);
  shapeSprite.anchor.set(0.5,0.5);
  return shape;
}

function setupFallingShape() {
  game.physics.enable(fallingShape, Phaser.ARCADE);
  fallingShape.body.velocity.set(0, 70);
  fallingShape.checkWorldBounds = true;

  fallingShape.events.onOutOfBounds.add(function(shape){
    shape.kill();
    score--;
    updateScore();
    fallingShape = createRandomShape();
    setupFallingShape(fallingShape);
  }, this);
}

function updateScore() {
  scoreText.setText(`score: ${score}`);
}

function handleKeyUp(e) {
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
      fallingShape.kill();
      fallingShape = createRandomShape();
      setupFallingShape(fallingShape);
      score++;
    } else {
      score--;
    }
    updateScore();

  }
}

function preload() {
  game.stage.backgroundColor = '#eee';
  score = 0;
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  fallingShape = createRandomShape();
  setupFallingShape(fallingShape);
  let styles = {font: "20px Arial",fill: "#ff0044"}
  scoreText = game.add.text(game.world.width-100, 10, `score: ${score}`, styles);
  cursors = game.input.keyboard.createCursorKeys();

  game.input.keyboard.onUpCallback = handleKeyUp;
}

function update() {
 
  
}

