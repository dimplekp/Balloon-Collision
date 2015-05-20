(function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

  game.load.spritesheet('balloon', 'balloon-pink.png')
}

var sprite2;
var sprite3;

function update() {
  balloon1.alpha -= 50;
  balloon2.alpha -= 50;
  balloon3.alpha -= 50;
}

function create() {

  game.world.setBounds(0, 0, 800, 800);

  game.stage.backgroundColor = '#124184';

  game.physics.startSystem(Phaser.Physics.P2JS);

  // Keep balloons from colliding at world bounds  
  game.physics.p2.updateBoundsCollisionGroup(true);

  flyBalloons();
}

function balloonLeftWorld(balloon) {
  console.log(balloon);
}

function collisionWithMassSet() {
  balloon1.body.mass = 1;
  balloon1.body.gravity.y = -100;

  balloon2.body.mass = 2;
  balloon2.body.gravity.y = -100;

  balloon3.body.mass = 1;
  balloon3.body.gravity.y = -100;
}

function generateBalloonWithCollisionRemovingBalloon() {

  balloon1 = game.add.sprite(240, 400, 'balloon');

  balloon2 = game.add.sprite(240, 400, 'balloon');

  balloon3 = game.add.sprite(240, 800, 'balloon');

}

function generateSimpleBalloons() {

  balloon1 = game.add.sprite(240, 600, 'balloon');

  balloon2 = game.add.sprite(300, 600, 'balloon');

  balloon3 = game.add.sprite(380, 600, 'balloon');

}

function setVelocities() {

  balloon1.body.velocity.y = -180; // Negative value for upward direction

  balloon2.body.velocity.y = -110;

  balloon3.body.velocity.y = 0;
}

function flyBalloons() {
  
  generateBalloonWithCollisionRemovingBalloon();

  // BALLOON 1

  text1 = game.add.text(-15, -60, '70', { fontSize: '25px', fill: '#ffffff' });
  balloon1.addChild(text1);
  game.physics.enable(balloon1, Phaser.Physics.P2JS); // Lets ballon sprite set body properties
  balloon1.body.fixedRotation = true; // Keeps baloon from rotating on collision.
                                      // Sprite rotation on collision is default 
                                      // behavior of P2 Physics
  balloon1.body.setCircle(45); // Detect collision only on balloon
                               // i.e., on circle with radius 45
  balloon1.checkWorldBounds = true;
  // Kill balloon when it leaves the world
  balloon1.outOfBoundsKill = true
  balloon1.events.onOutOfBounds.add(balloonLeftWorld, this);
  
  // BALLOON 2

  text2 = game.add.text(-15, -60, '80', { fontSize: '25px', fill: '#ffffff' });
  balloon2.addChild(text2);
  game.physics.enable(balloon2, Phaser.Physics.P2JS);
  balloon2.body.fixedRotation = true;
  balloon2.body.setCircle(45);
  balloon2.checkWorldBounds = true;
  balloon2.outOfBoundsKill = true
  balloon2.events.onOutOfBounds.add(balloonLeftWorld, this);

  // BALLOON 3

  text3 = game.add.text(-15, -60, '90', { fontSize: '25px', fill: '#ffffff' });
  balloon3.addChild(text3);
  game.physics.enable(balloon3, Phaser.Physics.P2JS);
  balloon3.body.fixedRotation = true;
  balloon3.body.setCircle(45);
  balloon3.checkWorldBounds = true;
  balloon3.outOfBoundsKill = true
  balloon3.events.onOutOfBounds.add(balloonLeftWorld, this);

  setVelocities();
  collisionWithMassSet();
}

})();