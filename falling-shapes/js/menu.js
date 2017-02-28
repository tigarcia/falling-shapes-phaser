var menuState = {
  create() {
    title = game.add.text(game.world.width*.5,
                  game.world.height*.2,
                 "Falling Shapes",
                 {font: "60px Ariel", fill: "#FF0000"}
                 );
    title.anchor.set(0.5, 0.5);
    sub = game.add.text(game.world.width*.5,
                        game.world.height*.5,
                        "Press Space Bar To Continue",
                        {font: "25px Ariel", fill: "#000000"}
                        );
    sub.anchor.set(0.5, 0.5);

    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    spaceKey.onDown.addOnce(function() {
      game.state.start('play');
    }, this);

  } 
};