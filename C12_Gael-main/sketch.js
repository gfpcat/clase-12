
var trex, trex_running;
var ground, groundimg;
var invisbleGround;
var clouds, cloudsImg;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimg = loadImage("ground2.png");
  cloudsImg= loadImage("cloud2.png");
}

function setup() {
  createCanvas(600, 200);

  //crear sprite del t-rex.
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundimg);
  edges = createEdgeSprites();

  invisbleGround = createSprite(200,190,400,10);
  invisbleGround.visible = false;

  var rand = Math.round(random(10,60));
  console.log(rand);


}

function draw() {
  background("white")
//console.log(trex.y);
  if (keyDown("space") && trex.y >= 161) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  ground.velocityX = -2;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisbleGround);

  spawnClouds();
  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo

  drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    clouds=createSprite(600,100,40,10);
    clouds.addImage(cloudsImg);
    clouds.y=Math.round(random(10,60));
    clouds.scale=0.6;
clouds.velocityX=-4;
clouds.depth=trex.depth;
trex.depth=trex.depth+1;
  }
}
