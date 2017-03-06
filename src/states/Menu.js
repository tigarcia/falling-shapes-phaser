class Menu extends Phaser.State {

  create() {
    let title = this.game.add.text(this.game.world.width*.5,
                  this.game.world.height*.2,
                 "Falling Shapes",
                 {font: "60px Ariel", fill: "#FF0000"}
                 );
    title.anchor.set(0.5, 0.5);
    let sub = this.game.add.text(this.game.world.width*.5,
                        this.game.world.height*.5,
                        "Press Space Bar To Continue",
                        {font: "25px Ariel", fill: "#000000"}
                        );
    sub.anchor.set(0.5, 0.5);

    let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    spaceKey.onDown.addOnce(function() {
      this.game.state.start('Main');
    }, this);

  } 
}

export default Menu;
