const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var board
var obstacle1
var hole
var ball
var releasePoint
var border1


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1500, 1000);
    engine = Engine.create();
    world = engine.world;
    
    var ballOptions = {restitution: 1}
    ball = Bodies.circle(150, 20, 20, ballOptions)
    World.add(world, ball)

    border1 = new Borders(10, 500, 10, 1000)
    border2 = new Borders(1490, 500, 10, 1000)
    border3 = new Borders(750, 10, 1500, 10)
    border4 = new Borders(750, 990, 1500, 10)

    obstacle1 = new Obstacles(750, 500, 15, 250, PI/4)
    obstacle2 = new Obstacles(750, 500, 15, 250, -PI/4)
    obstacle3 = new Obstacles(750, 330, 300, 15, 0)
    obstacle4 = new Obstacles(50, 50, 10, 90, PI/4)
    obstacle5 = new Obstacles(1450, 50, 10, 90, -PI/4)
    obstacle6 = new Obstacles(50, 950, 10, 90, -PI/4)
    obstacle7 = new Obstacles(1450, 950, 10, 90, PI/4)
}

function draw(){
    background(0)
    Engine.update(engine);
   
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20)
    border1.display()
    border2.display()
    border3.display()
    border4.display()
    console.log(ball)
    
    
    obstacle1.display()
    obstacle2.display()
    obstacle3.display()
    obstacle4.display()
    obstacle5.display()
    obstacle6.display()
    obstacle7.display()
}

function mousePressed() {
        
        Matter.Body.applyForce(ball, ball.position,{x: 50, y: -50})
        

}



