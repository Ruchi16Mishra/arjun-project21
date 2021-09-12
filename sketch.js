const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var wall1, wall2, wall3, wall4;
let crwall_1, crwall_2, crwall_3, crwall_4;

var ball, cpb;

let engine, world;


function preload(){
	
}

function setup() {
	createCanvas(1000, 900);

	engine = Engine.create();
	world = engine.world;

	wall1 = new Ground (500, 890, 1000, 30);
	wall2 = new Ground (500, 10, 1000, 30);
	wall3 = new Ground (10, 450, 30, 1000);
	wall4 = new Ground (990, 450, 30, 1000);

	crwall_1 = new cr (700, 450, 15, 100);
	crwall_2 = new cr (750, 492, 100, 15);
	crwall_3 = new cr (800, 450, 15, 100);
	crwall_4 = new cr (750, 681, 15, 380);

	var ball_options = {
		
		restitution: 0.8,
		friction: 0.03,
		density: 0.08,	
	};

	//Create the Bodies Here.
	ball = Bodies.circle (200, 200, 40, ball_options);
	World.add(world, ball);

	var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
  Render.run(render);
	

	imageMode (CENTER);
}


function draw() {
	background(0);
	Engine.update (engine);

	

	push ();

	fill ("Red");

	stroke ("blue");
	strokeWeight (3);

	text ("Press 'right arrow key' to throw the crumpled ball in that weird bin.", 50, 50);

	pop();

	wall1.show ();
	wall2.show ();
	wall3.show ();
	wall4.show ();

	crwall_1.show ();
	crwall_2.show ();
	crwall_3.show ();
	crwall_4.show ();

	// keyPressed ();

	

	push ();

	fill ("green");

	stroke ("green");
	strokeWeight (3);

	translate(ball.position.x, ball.position.y);
	rotate(ball.angle);
	circle (0, 0, 80);

	pop ();
} 


function keyPressed () {
	if ((keyCode === RIGHT_ARROW)) {
		Body.applyForce (ball, {x : 0, y : 0}, {x : 7, y : 4});
}
}