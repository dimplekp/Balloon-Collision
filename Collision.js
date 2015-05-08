(function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

  game.load.spritesheet('balloon', 'balloon-pink.png')
}

var sprite2;
var sprite3;

function create() {

  game.stage.backgroundColor = '#124184';

  game.physics.startSystem(Phaser.Physics.P2JS);

  // BALLOON 1

  balloon1 = game.add.sprite(220, 600, 'balloon');
  text1 = game.add.text(-15, -60, '70', { fontSize: '25px', fill: '#ffffff' });
  balloon1.addChild(text1);
  game.physics.enable(balloon1, Phaser.Physics.P2JS);
  balloon1.body.velocity.y = -100;
  balloon1.body.fixedRotation = true;
  balloon1.body.setCircle(45);

  // BALLOON 2

  balloon2 = game.add.sprite(300, 300, 'balloon');
  text2 = game.add.text(-15, -60, '80', { fontSize: '25px', fill: '#ffffff' });
  balloon2.addChild(text2);
  game.physics.enable(balloon2, Phaser.Physics.P2JS);
  balloon2.body.velocity.y = -100;
  balloon2.body.fixedRotation = true;
  balloon2.body.setCircle(45);

  // BALLOON 3

  balloon3 = game.add.sprite(400, 300, 'balloon');
  text3 = game.add.text(-15, -60, '90', { fontSize: '25px', fill: '#ffffff' });
  balloon3.addChild(text3);
  game.physics.enable(balloon3, Phaser.Physics.P2JS);
  balloon3.body.velocity.y = -100;
  balloon3.body.fixedRotation = true;
  balloon3.body.setCircle(45);

}

function update() {
}

})();