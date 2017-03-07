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

    const h = this.game.world.height * 0.7;
    const hArrow = this.game.world.height * 0.85;
    const x1 = this.game.world.width * 0.2;
    const x2 = this.game.world.width * 0.41;
    const x3 = this.game.world.width * 0.58;
    const x4 = this.game.world.width * 0.8;


    const red = 0xFF0000;
    const black = 0x000000;

    let leftGroup = this.game.add.group();
    let rCircle = this.game.add.graphics(x1,h)
    rCircle.beginFill(red);
    rCircle.drawCircle(0,30,60);
    let shapeSprite = leftGroup.create(0, 0);
    shapeSprite.addChild(rCircle);
    shapeSprite.anchor.set(0.5,0.5);
    leftGroup.create(x1, hArrow, 'arrow-left').anchor.set(0.5, 0.5);


    let rightGroup = this.game.add.group();
    let bCircle = this.game.add.graphics(x2,h)
    bCircle.beginFill(black);
    bCircle.drawCircle(0,30,60);
    let shapeSprite2 = rightGroup.create(0, 0);
    shapeSprite2.addChild(bCircle);
    shapeSprite2.anchor.set(0.5,0.5);
    rightGroup.create(x2, hArrow, 'arrow-right').anchor.set(0.5, 0.5);


    let upGroup = this.game.add.group();
    let rSquare = this.game.add.graphics(x3, h);
    rSquare.beginFill(red);
    rSquare.drawRect(0,0, 60,60);
    let shapeSprite3 = upGroup.create(0, 0);
    shapeSprite3.addChild(rSquare);
    shapeSprite3.anchor.set(0.5,0.5);
    upGroup.create(x3, hArrow, 'arrow-up').anchor.set(0.25,0.5);

    let downGroup = this.game.add.group();
    let bSquare = this.game.add.graphics(x4, h)
    bSquare.beginFill(black);
    bSquare.drawRect(0,0, 60,60);
    let shapeSprite4 = downGroup.create(0, 0);
    shapeSprite4.addChild(rSquare);
    shapeSprite4.anchor.set(0.5,0.5);
    downGroup.create(x4, hArrow, 'arrow-down').anchor.set(0.25,0.5);


  } 
}

export default Menu;
