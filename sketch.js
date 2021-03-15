var background;
var tom, tom1,tom2,tom3,tom4;
var jerry,jerry1, jerry2,jerry3,jerry4;
function preload() {
    //load the images here
    backGround = loadImage("images/garden.png");
    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");

    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,600,30,50);
    tom.addAnimation("sitting",tom1);
    tom.scale = 0.1;


    jerry = createSprite(300,640,30,50);
    jerry.addAnimation("standing",jerry1);
    jerry.scale = 0.1;

}

function draw() {

    background(backGround);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX = 0;
       tom.addAnimation("teased",tom3);
       tom.changeAnimation("teased");

       jerry.addAnimation("teasing",jerry3);
       jerry.changeAnimation("teasing");
        

    }
    drawSprites();

}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
       tom.velocityX = -4
       tom.addAnimation("running",tom2);
       tom.changeAnimation("running");

       jerry.addAnimation("stand",jerry2);
       jerry.changeAnimation("stand");


    }

  //For moving and changing animation write code here


}
