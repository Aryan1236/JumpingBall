var canvas;
var music;
var box1,
    box2,
    box3,
    box4,
    ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    box1 = createSprite(100,550,150,25);
    box2 = createSprite(300,550,150,25);
    box3 = createSprite(500,550,150,25);
    box4 = createSprite(700,550,150,25);
    ball = createSprite(200,200,20,20);
    box1.shapeColor = "red";
    box2.shapeColor = "blue";
    box3.shapeColor = "purple";
    box4.shapeColor = "green";

    //create box sprite and give velocity
}

function draw() {
    background("black");
    //create edgeSprite

var edges = createEdgeSprites();


ball.bounceOff(edges);

ball.x = mouseX;
ball.y = mouseY;


    
    music.play();

   drawSprites();

    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball)&&ball.bounceOff(box1) )
{
    ball.shapeColor = "red";
    
}

if(box2.isTouching(ball) )
{
    ball.shapeColor = "blue";
    music.stop();
    
}

if(box3.isTouching(ball)&&ball.bounceOff(box3) )
{
    ball.shapeColor = "purple";
    
}

if(box4.isTouching(ball)&&ball.bounceOff(box4) )
{
    ball.shapeColor = "green";

}
}
