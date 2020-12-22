// Creating variables
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var RightRectangle, LeftRectangle, CentreRectangle
var  RightBody, LeftBody, CenterBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload() {
// Loading the helicopter image
  helicopterIMG = loadImage("helicopter.png");
  // loading the package image
  packageIMG = loadImage("package.png");
}

function setup() {
//creating the canvas 
  createCanvas(800, 700);

  rectMode(CENTER);

  // Craeting the package sprite
  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  // Creating the helicopter sprite
  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  // Creating the ground sprite
  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  // creating the physics engine
  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.4,
    isStatic: true,});
  World.add(world, packageBody);

  var options = {
    isStatic: true,};

  //Creating a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, options);
  World.add(world, ground);

  // Creating the left rectangle
  LeftRectangle = createSprite(300, 610, 20, 100);
  LeftRectangle.shapeColor = color(255, 0, 0);

  // creating left body
  LeftBody = Bodies.rectangle(300, 610, 20, 100, options);
  World.add(world, LeftBody);

  // crating the centre static rectangle
  CenterRectangle = createSprite(400, 650, 200, 20);
  CenterRectangle.shapeColor = color(255, 0, 0);

  // creating the centre body
  CenterBody = Bodies.rectangle(400, 635, 200, 20, options);
  World.add(world, CenterBody);

  // Creating the right rectangle
  RightRectangle= createSprite(500, 610, 20, 100);
  RightRectangle.shapeColor = color(255, 0, 0);

  // creating right body
  RightBody = Bodies.rectangle(500, 610, 20, 100, options);
  World.add(world, RightBody);

  // To run the physics engine
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  // to create the  background
  background(0);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  // To draw the sprites
  drawSprites();
}

function keyPressed() {
    // when down arrow is pressed the package will drop
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



