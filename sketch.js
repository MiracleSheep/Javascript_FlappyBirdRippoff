let img;
var bb;
var p1;
var p2;
var x1 = 0;
var x2; 
var scrollSpeed = 2;
var gravity = 4;
var startsc = 1;
var pillarc = 0;
var velocity = -8;


function preload() {
    img = loadImage('Images/background1.jpg');

}


  function setup() {
    background(50);
    createCanvas(400,400);
    x2 = width;

    
    
  }

  


function draw() {

  
  if (startsc == 1) {
    startscreen();
    Start.draw();
    Start.handleMouseClick();

  } else if (startsc == 2) {

    bb = new bird(50,25,25);
    var r1 = Random(0,250);
    p1 = new pillar(400,15,r1);
    var r1 = Random(0,250);
    p2 = new pillar(600,15,r1);
    startsc = 4;
    clear();


  } else if (startsc == 4) {
    startscreen();
    p1.drawp();
    p2.drawp();
    bb.drawe();
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text("Score: " + pillarc, 370,25);

    var pa = [p1,p2]; 
 

      for (var i = 0; i < pa.length; i++) {
        

        if (bb.x < pa[i].x + pa[i].width &&
          bb.x + bb.width > pa[i].x &&
          bb.y < 0 +pa[i].l1 &&
          bb.y + bb.length > 0) {
            startsc +=1;
            clear();

        }


        if (bb.x < pa[i].x + pa[i].width &&
          bb.x + bb.width > pa[i].x &&
          bb.y < 400  &&
          bb.y + bb.length > pa[i].y) {
            startsc +=1;
            clear();

       }

      }

    } else if (startsc == 5) {
      background(255);
      textSize(32);
      fill(0);
      text("You died!",200,200);

    }


    


  }

  

