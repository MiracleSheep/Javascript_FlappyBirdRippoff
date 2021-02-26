

//This is a class for buttons
var optionButton = function(config) {
  this.x = config.x || 0;
  this.y = config.y || 0;
  this.width = config.width || 84;
  this.height = config.height || 50;
  this.label = config.label || "Click";
  this.color1 = config.color1 || 207;
  this.color2 = config.color2 || 85;
  this.color3 = config.color3 || 85;
  this.onClick = config.onClick || function() {};

};

optionButton.prototype.draw = function() {
  if (this.isMouseInside() && mouseIsPressed) {

      fill(255, 255, 255);
  } else {
      fill(this.color1,this.color2,this.color3);
  }
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height, 5);
  fill(0, 0, 0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(this.label, this.x, this.y);
};


optionButton.prototype.isMouseInside = function() {
  return mouseX > this.x - this.width / 2 &&
      mouseX < (this.x + this.width / 2) &&
      mouseY > this.y - this.height / 2 &&
      mouseY < (this.y + this.height / 2);
};


optionButton.prototype.handleMouseClick = function() {
  if (this.isMouseInside() && mouseIsPressed) {
      this.onClick();
  }
};



class pillar {
  constructor(x,width){

    this.x = x;
    this.width = width;
    this.l1 = Random(0,300);
    this.l2 = 400 - (this.l1+150); 
    this.y = this.l1+150;
  }

  drawp() {



    
  
    fill(255);
    
    rect(this.x,0,this.width,this.l1);
    rect(this.x,this.y,this.width,this.l2);


  
    this.x -= scrollSpeed;

    if (this.x < 0) {
      this.l1 = Random(0,300);
      this.l2 = 400 - (this.l1+150); 
      this.y = this.l1+150;
      this.x = 400;
      pillarc ++;
    }

  }


  }

 



class bird {

  constructor(x,width,length) {
    this.x = x;
    this.width = width;
    this.length = length;
    this.y = 100;

  }

  drawe() {

    fill(255);


    rect(this.x, this.y, this.length, this.width);
    image(img2,this.x, this.y, this.length, this.width);

    if (keyIsPressed && keyCode == UP_ARROW) {
      this.y += velocity + gravity;
    } else {
      this.y += gravity;
    }

    
    if (this.y + (this.length/2) > 400) {
       startsc += 1;
       clear();
    }  
    if (this.y - (this.length/2) < 0) {
      startsc += 1;
      clear();
    } 


    
  }



  }

  


function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



var Start = new optionButton({
  x: 200,
  y: 200,
  width: 50,
  height: 64,
  color1: 255,
  color2: 0,
  color3: 58,
  label: "Start!",
  onClick: function() {
    startsc = 2;
    rectMode(CORNER);
  }


});

var Restart = new optionButton({
  x: 200,
  y: 300,
  width:100,
  length:50,
  color1:6,
  color2:191,
  color3:77,
  label: "Restart?",
  onClick: function() {
    startsc = 2;
    rectMode(CORNER);
  }




});






var startscreen = function() {

    

    image(img, x1, 0, width, height);
    image(img, x2, 0, width, height);
    x1 -= scrollSpeed;
    x2 -= scrollSpeed;
        
    if (x1 < -width){
      x1 = width;
    }
    if (x2 < -width){
      x2 = width;
    }

        
}

