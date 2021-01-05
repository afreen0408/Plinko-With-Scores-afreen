const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle;
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var turn=0;
var gameState="play"
function setup() {
  createCanvas(800,700);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 ground=new Ground(width/2,height,width,10)

// divisions
for(var k=0; k<=innerWidth;k+=80){
  divisions.push(new Division (k, height-divisionHeight/2,10,divisionHeight))
}
//plinko row 1
for (var j=40;j<=width;j+=50){
  plinkos.push(new Plinko(j,75));
}
//plinko row 2
for (var j=15;j<=width+10;j+=50){
  plinkos.push(new Plinko(j,150));
}
//plinko row 3
for (var j=40;j<=width;j+=50){
  plinkos.push(new Plinko(j,225));
}
//plinko row 4
for (var j=15;j<=width+10;j+=50){
  plinkos.push(new Plinko(j,300));
}



 Engine.run(engine);
}

function draw() {
  background(0); 
  textSize(20)
  fill("white")
  text("SCORE: "+score,20,20)
text ("500",20,420)
text ("500",100,420)
text ("500",180,420)
text ("500",260,420)
text ("100",340,420)
text ("100",420,420)
text ("100",500,420)
text ("200",580,420)
text ("200",660,420)
text ("200",740,420)
text(mouseX+","+mouseY,mouseX,mouseY)
  ground.display();
  //display divisions
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  //display plinkos
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(230,250),10))
  }
  // display particles
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }*/
//if (Matter.Detector.canCollide(particle,ground)){particle=null}
if(particle!=null){
  particle.display();
 if(particle.body.position.y>370){
   
    if(particle.body.position.x<315){
      score+=500;
      //particle=null;
      if(turn>=5){
        gameState="end";
      }
    }
   if(particle.body.position.x>=315 && particle.body.position.x<556){
      score+=100;
     //particle=null;
      if(turn>=5){
        gameState="end";
      }
    }
    if(particle.body.position.x>=556){
      score+=200;
     //particle=null;
      if(turn>=5){
        gameState="end";
      }
    }
    particle=null
  }
}
if(gameState==="end"){
fill ("Cyan")
textSize(35)
  text ("GAME OVER",318,375)
}

  //drawSprites();
}
function mousePressed(){
  //particle=null;
if(gameState!=="end"){
  turn++;
  particle=new Particle(mouseX,10,10)
}

}