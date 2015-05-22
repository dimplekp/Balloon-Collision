(function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

  game.load.spritesheet('balloon', 'balloon-pink.png');
  game.load.spritesheet('tile', 'transparent-tile.png');
}

function update() {
  this.game.physics.p2.onBeginContact.add(contactHandler);
}

var sprite2;
var sprite3;

function create() {

  game.world.setBounds(0, 0, 800, 800);

  game.stage.backgroundColor = '#124184';

  game.physics.startSystem(Phaser.Physics.P2JS);

  // Make things a bit more bouncey
  game.physics.p2.restitution = 0.8;

  game.physics.p2.applyGravity = true;

  // Keep balloons from colliding at world bounds  
  game.physics.p2.updateBoundsCollisionGroup(true);

  // Generate transparent tile on the bottom to stop balloons from
  // going out of the world from bottom
  tile1 = game.add.sprite(400, 600, 'tile');
  game.physics.enable(tile1, Phaser.Physics.P2JS);
  tile1.body.static = true;  

  flyBalloons();
}

function setMass() {
  balloon1.body.mass = 1; // This makes it possible for upper body to move slowly
                           // and it also makes the lower balloon slow
  balloon2.body.mass = 1;

  balloon3.body.mass = 1;
}

function generateBalloonWithBugSituation() {

  balloon1 = game.add.sprite(240, 500, 'balloon');

  balloon2 = game.add.sprite(240, 500, 'balloon');

  balloon3 = game.add.sprite(240, 800, 'balloon');
}

function generateSimpleBalloons() {

  balloon1 = game.add.sprite(240, 600, 'balloon');

  balloon2 = game.add.sprite(300, 600, 'balloon');

  balloon3 = game.add.sprite(380, 600, 'balloon');
}

function setVelocities() {

  balloon1.body.velocity.y = -260; // Negative value for upward direction

  balloon2.body.velocity.y = -180;
  
  balloon3.body.velocity.y = -120;
}

function flyBalloons() {
  
  generateBalloonWithBugSituation();

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
  
  // BALLOON 2

  text2 = game.add.text(-15, -60, '80', { fontSize: '25px', fill: '#ffffff' });
  balloon2.addChild(text2);
  game.physics.enable(balloon2, Phaser.Physics.P2JS);
  balloon2.body.fixedRotation = true;
  balloon2.body.setCircle(45);
  balloon2.checkWorldBounds = true;
  balloon2.outOfBoundsKill = true

  // BALLOON 3

  text3 = game.add.text(-15, -60, '90', { fontSize: '25px', fill: '#ffffff' });
  balloon3.addChild(text3);
  game.physics.enable(balloon3, Phaser.Physics.P2JS);
  balloon3.body.fixedRotation = true;
  balloon3.body.setCircle(45);
  balloon3.checkWorldBounds = true;
  balloon3.outOfBoundsKill = true

  setVelocities();
}

function contactHandler(bodyA, bodyB, shapeA, shapeB, contactEquations) {
  console.log(contactEquations[0].bodyA.parent.mass); // Mass of body A
  console.log(contactEquations[0].bodyB.parent.mass); // Mass of body B
  contactEquations[0].bodyA.parent.mass = 1;
  contactEquations[0].bodyB.parent.mass = 50; // Increase mass of body B to
                                              // reduce it's speed after collision
}

})();