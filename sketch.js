var bobObject1;
var rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;

	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	rope1 = new Rope(bobObject1.body,roof.body, -bobDiameter*2,0);

	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	rope2 = new Rope(bobObject2.body,roof.body, -bobDiameter*1,0);

	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);

	rope3 = new Rope(bobObject3.body,roof.body, 0,0);

	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);

	rope4 = new Rope(bobObject4.body,roof.body, bobDiameter*1,0);

	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope5 = new Rope(bobObject5.body,roof.body, bobDiameter*2,0);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x: -50, y: -45});
	}
}

function drawLine(constraint) {
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roodBodyOffset = constraint.bodyB;
	roofBodyX = roofBodyPosition.x+roodBodyOffset.x;
	roofBodyY = roofBodyPosition.y+roodBodyOffset.y;
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}



