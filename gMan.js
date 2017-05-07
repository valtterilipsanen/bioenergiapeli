function gMan(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
}

var eSize = 10;
var eSpeed = 2;
var gCount = 0;

var gMen = [new gMan(500, 500, eSize, eSpeed, 2)];

function gManTick(){
  gCount += 1;
  if(gCount > 850){
    gCount = 0;
    addGMan();
  }
}

function drawGMen(context) {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var x = e.x;
    var y = e.y;
    context.beginPath();
    context.fillStyle = '#FFFF00';
    context.arc(x, y, e.r, 0, 2*Math.PI);
    context.fill();
    context.closePath();
  }
}


function moveGMen() {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var angle;

    if(e.x >= p.x && e.y <= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
     } else if(e.x <= p.x && e.y <= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x));
     } else if(e.x >= p.x && e.y >= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
     } else if(e.x <= p.x && e.y >= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x));
     }

    e.dir = angle;

    var x =  e.speed * Math.cos(e.dir);
    var y = e.speed * Math.sin(e.dir);

    e.x = e.x + x;
    e.y = e.y + y;
    }
}


function addGMan() {

  var newX;
  var newY;

  switch(getRandomInteger(0,3)){
    case 0:
    newX = 0;
    newY = getRandomInteger(0,height);
    break;
    case 1:
    newY = 0;
    newX = getRandomInteger(0,width);
    break;
    case 2:
    newX = width;
    newY = getRandomInteger(0, height)
    break;
    case 3:
    newY = height;
    newX = getRandomInteger(0,width);
    break;
  }

  gMen.push(new gMan(newX, newY, eSize, eSpeed, 0))

  }



function killGMan(index){
  gMen.splice(index,1);
}
