var bg, bgImg;
var answerBox, coin
var score

function preload() {
	bgImg = loadImage ("classroom.png")
  coinImg = loadImage ("coins.png")
}

function setup() {
  createCanvas(1000,500);
  answerBox = new AnswerBox ()
  system = new System()

  bg = createSprite (500,300, 1000, 500)
  bg.addImage(bgImg)
  bg.scale = 1

  coin = createSprite (500,300,20,20)
  coin.addImage(coinImg)
  coin.scale = 0.06
  coin.visible = false

  score = 0
}


function draw() {
  background(255,255,255); 
  drawSprites();
  answerBox.display()
  textSize(20);
  fill("black");
  text("Score: " + score, 450, 50);
}