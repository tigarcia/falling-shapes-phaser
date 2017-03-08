!function e(t,r,a){function o(n,s){if(!r[n]){if(!t[n]){var h="function"==typeof require&&require;if(!s&&h)return h(n,!0);if(i)return i(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[n]={exports:{}};t[n][0].call(c.exports,function(e){var r=t[n][1][e];return o(r?r:e)},c,c.exports,e,t,r,a)}return r[n].exports}for(var i="function"==typeof require&&require,n=0;n<a.length;n++)o(a[n]);return o}({1:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=e("states/Boot"),h=a(s),l=e("states/Preload"),c=a(l),u=e("states/Menu"),d=a(u),f=e("states/Main"),p=a(f),g=e("states/GameOver"),y=a(g),m=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,500,500,Phaser.AUTO));return e.state.add("Boot",h.default,!1),e.state.add("Preload",c.default,!1),e.state.add("Menu",d.default,!1),e.state.add("Main",p.default,!1),e.state.add("GameOver",y.default,!1),e.state.start("Boot"),e}return n(t,e),t}(Phaser.Game);new m},{"states/Boot":2,"states/GameOver":3,"states/Main":4,"states/Menu":5,"states/Preload":6}],2:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),n(t,[{key:"create",value:function(){this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.state.start("Preload")}}]),t}(Phaser.State);r.default=s},{}],3:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),n(t,[{key:"init",value:function(e){this.score=e}},{key:"create",value:function(){var e=this.game.add.text(.5*this.game.world.width,.2*this.game.world.height,"Game Over",{font:"45px Ariel",fill:"#FF0000"});e.anchor.set(.5,.5);var t=this.game.add.text(.5*this.game.world.width,.5*this.game.world.height,"Score: "+this.score,{font:"45px Ariel",fill:"#000000"});t.anchor.set(.5,.5);var r=this.game.add.text(.5*this.game.world.width,.75*this.game.world.height,"Press Space Bar To Play Again",{font:"25px Ariel",fill:"#000000"});r.anchor.set(.5,.5);var a=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);a.onDown.addOnce(function(){this.game.state.start("Main")},this)}}]),t}(Phaser.State);r.default=s},{}],4:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),n(t,[{key:"init",value:function(){this.fallingShape=void 0,this.score=0,this.scoreText=void 0,this.timeText=void 0,this.isCircle=!1,this.color=16711680}},{key:"setupFallingShape",value:function(){this.game.physics.enable(this.fallingShape,Phaser.ARCADE),this.fallingShape.body.velocity.set(0,85),this.fallingShape.checkWorldBounds=!0,this.fallingShape.events.onOutOfBounds.add(function(e){this.fallingShape.kill(),this.score--,this.updateScore(),this.fallingShape=this.createRandomShape(),this.setupFallingShape()},this)}},{key:"handleKeyUp",value:function(e){if(e.keyCode==Phaser.Keyboard.UP||e.keyCode==Phaser.Keyboard.DOWN||e.keyCode==Phaser.Keyboard.LEFT||e.keyCode==Phaser.Keyboard.RIGHT){var t=!1;e.keyCode==Phaser.Keyboard.LEFT?16711680===this.color&&this.isCircle&&(t=!0):e.keyCode==Phaser.Keyboard.RIGHT?0===this.color&&this.isCircle&&(t=!0):e.keyCode==Phaser.Keyboard.UP?16711680!==this.color||this.isCircle||(t=!0):e.keyCode==Phaser.Keyboard.DOWN&&(0!==this.color||this.isCircle||(t=!0)),t?(this.fallingShape.kill(),this.fallingShape=this.createRandomShape(),this.setupFallingShape(),this.score++):this.score--,this.updateScore()}}},{key:"createRandomShape",value:function(){this.isCircle=Math.floor(2*Math.random())>0,this.color=[16711680,0][Math.floor(2*Math.random())];var e=void 0,t=void 0,r=this.game.world.height*(.4*Math.random()+.3),a=this.game.world.width*(.4*Math.random()+.3);return this.isCircle?(t=this.game.add.graphics(a,r),t.beginFill(this.color),t.drawCircle(0,30,60)):(t=this.game.add.graphics(a,r),t.beginFill(this.color),t.drawRect(0,0,60,60)),e=this.game.add.sprite(0,0),e.addChild(t),e.anchor.set(.5,.5),t}},{key:"updateScore",value:function(){this.scoreText.setText("score: "+this.score)}},{key:"done",value:function(){this.game.state.start("GameOver",!0,!1,this.score)}},{key:"create",value:function(){this.fallingShape=this.createRandomShape(),this.setupFallingShape(this.fallingShape);var e={font:"20px Arial",fill:"#ff0044"};this.scoreText=this.game.add.text(this.game.world.width-100,10,"score: "+this.score,e),this.timeText=this.game.add.text(this.game.world.width-100,34,"time:   20",e),this.game.input.keyboard.onUpCallback=this.handleKeyUp.bind(this),this.game.time.events.add(30*Phaser.Timer.SECOND,this.done,this);var t=.05*this.game.world.height,r=.12*this.game.world.height,a=.1*this.game.world.width,o=.2*this.game.world.width,i=.3*this.game.world.width,n=.4*this.game.world.width,s=16711680,h=0,l=void 0,c=this.game.add.group(),u=this.game.add.graphics(a,t);u.beginFill(s),u.drawCircle(0,10,20);var d=c.create(0,0);d.addChild(u),d.anchor.set(.5,.5),l=c.create(a,r,"arrow-left"),l.scale.setTo(.1,.1),l.anchor.set(.5,.5);var f=this.game.add.group(),p=this.game.add.graphics(o,t);p.beginFill(h),p.drawCircle(0,10,20);var g=f.create(0,0);g.addChild(p),g.anchor.set(.5,.5),l=f.create(o,r,"arrow-right"),l.scale.setTo(.1,.1),l.anchor.set(.5,.5);var y=this.game.add.group(),m=this.game.add.graphics(i,t);m.beginFill(s),m.drawRect(0,0,20,20);var b=y.create(0,0);b.addChild(m),b.anchor.set(.5,.5),l=y.create(i+5,r,"arrow-up"),l.scale.setTo(.1,.1),l.anchor.set(.01,.5);var w=this.game.add.group(),v=this.game.add.graphics(n,t);v.beginFill(h),v.drawRect(0,0,20,20);var O=w.create(0,0);O.addChild(m),O.anchor.set(.5,.5),l=w.create(n+5,r,"arrow-down"),l.scale.setTo(.1,.1),l.anchor.set(.01,.5)}},{key:"render",value:function(){this.timeText.setText("time:   "+Math.floor(this.game.time.events.duration/1e3))}}]),t}(Phaser.State);r.default=s},{}],5:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),n(t,[{key:"create",value:function(){var e=this.game.add.text(.5*this.game.world.width,.2*this.game.world.height,"Falling Shapes",{font:"60px Ariel",fill:"#FF0000"});e.anchor.set(.5,.5);var t=this.game.add.text(.5*this.game.world.width,.5*this.game.world.height,"Press Space Bar To Continue",{font:"25px Ariel",fill:"#000000"});t.anchor.set(.5,.5);var r=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);r.onDown.addOnce(function(){this.game.state.start("Main")},this);var a=.7*this.game.world.height,o=.9*this.game.world.height,i=.2*this.game.world.width,n=.41*this.game.world.width,s=.58*this.game.world.width,h=.8*this.game.world.width,l=16711680,c=0,u=void 0,d=this.game.add.group(),f=this.game.add.graphics(i,a);f.beginFill(l),f.drawCircle(0,30,60);var p=d.create(0,0);p.addChild(f),p.anchor.set(.5,.5),u=d.create(i,o,"arrow-left"),u.scale.setTo(.3,.3),u.anchor.set(.5,.5);var g=this.game.add.group(),y=this.game.add.graphics(n,a);y.beginFill(c),y.drawCircle(0,30,60);var m=g.create(0,0);m.addChild(y),m.anchor.set(.5,.5),u=g.create(n,o,"arrow-right"),u.scale.setTo(.3,.3),u.anchor.set(.5,.5);var b=this.game.add.group(),w=this.game.add.graphics(s,a);w.beginFill(l),w.drawRect(0,0,60,60);var v=b.create(0,0);v.addChild(w),v.anchor.set(.5,.5),u=b.create(s+10,o,"arrow-up"),u.scale.setTo(.3,.3),u.anchor.set(.01,.5);var O=this.game.add.group(),_=this.game.add.graphics(h,a);_.beginFill(c),_.drawRect(0,0,60,60);var P=O.create(0,0);P.addChild(w),P.anchor.set(.5,.5),u=O.create(h+10,o,"arrow-down"),u.scale.setTo(.3,.3),u.anchor.set(.01,.5)}}]),t}(Phaser.State);r.default=s},{}],6:[function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),n(t,[{key:"preload",value:function(){this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.scale.pageAlignHorizontally=!0,this.game.scale.pageAlignVertically=!0,this.game.scale.minWidth=320,this.game.scale.minHeight=320,this.game.scale.maxWidth=1200,this.game.scale.maxHeight=1200,this.game.stage.backgroundColor="#eee",this.game.load.image("arrow-up","arrow-up.png"),this.game.load.image("arrow-down","arrow-down.png"),this.game.load.image("arrow-left","arrow-left.png"),this.game.load.image("arrow-right","arrow-right.png")}},{key:"create",value:function(){this.game.state.start("Menu")}}]),t}(Phaser.State);r.default=s},{}]},{},[1]);