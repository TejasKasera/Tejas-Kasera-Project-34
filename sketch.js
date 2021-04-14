var hero;
var drag;
var slingShot;
var bg;
var log1;
var log2;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var block27;
var block28;
var block29;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
bg = loadImage("backgroundImage.png")
}

function setup(){
    
    var canvas = createCanvas(displayWidth, displayHeight);

    
	engine = Engine.create();
	world = engine.world;

    block1 = new BlockRed(510,465,50,50);

    block2 = new BlockRed(510,415,50,50);

    block3 = new BlockRed(510,365,50,50);

    block4 = new BlockRed(510,315,50,50);

    block5 = new BlockRed(510,275,50,50);

    block6 = new BlockRed(510,215,50,50);

    block7 = new BlockRed(510,165,50,50);

    block8 = new BlockRed(510,115,50,50);

    block9 = new BlockRed(600,465,50,50);

    block10 = new BlockRed(600,415,50,50);

    block11 = new BlockRed(600,365,50,50);

    block12 = new BlockRed(600,315,50,50);

    block13 = new BlockRed(600,275,50,50);

    block14 = new BlockRed(600,215,50,50);

    block15 = new BlockRed(600,165,50,50);

    block16 = new BlockRed(690,465,50,50);

    block17 = new BlockRed(690,415,50,50);

    block18 = new BlockRed(690,365,50,50);

    block19 = new BlockRed(690,315,50,50);

    block20 = new BlockRed(690,275,50,50);

    block21 = new BlockRed(690,215,50,50);

    block22 = new BlockRed(690,165,50,50);

    block23 = new BlockRed(690,105,50,50);

    block24 = new BlockRed(690,45,50,50);

    block25 = new BlockRed(780,465,50,50);

    block26 = new BlockRed(780,415,50,50);

    block27 = new BlockRed(780,365,50,50);

    block28 = new BlockRed(780,315,50,50);

    block29 = new BlockRed(780,275,50,50);

    ground = new Ground(100,500,1950,20);
 
    hero = new SuperHero(270,300,250,250);
    
    drag = new SuperDrag(950,300,250,250);
    console.log(drag);

    slingShot = new SlingShot(hero.body,{x:270,y:200});
}

function draw(){
    Engine.update(engine);
    if(bg){
		background(bg);
	}
    ground.display();
    hero.display();
    drag.display();
    slingShot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly()
}

function keyPressed(){
    if(keyCode === 32){
     slingShot.attach(hero.body)
     Matter.Body.setPosition(hero.body,{x:270,y:200});
    }
}
