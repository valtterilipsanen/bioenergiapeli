var b0Img = new Image();
var b1Img = new Image();
var b2Img = new Image();
var b3Img = new Image();
var b4Img = new Image();

$(document).ready(function() {

b0Img.src = "assets/sprites/vero0.png"
b1Img.src = "assets/sprites/vero1.png"
b2Img.src = "assets/sprites/vero2.png"
b3Img.src = "assets/sprites/vero3.png"
b4Img.src = "assets/sprites/vero4.png"
});



function gMan(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
 this.img = 0;
 this.ticks = 0;
}

var eSize = 20;
var eSpeed = 1;
var gCount = 0;

var gMen = [new gMan(500, 500, eSize, eSpeed, 2)];

function gManTick(){
  gCount += 1;
  if(gCount > 600){
    gCount = 0;
    addGMan();
  }
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    e.ticks += 1;
    if(e.ticks >= 1000){
      e.ticks = 0;
    }
    if(e.ticks % 10 == 0){
      switch(e.img){
        case 0:
        e.img = 1;
        break;
        case 1:
        e.img = 2;
        break;
        case 2:
        e.img = 3;
        break;
        case 3:
        e.img = 4;
        break;
        case 4:
        e.img = 0;
        break;
      }
    }
  }
}

function drawGMen(context) {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var x = e.x;
    var y = e.y;

    context.save();
    context.translate(x,y);
    context.rotate(e.dir + Math.PI / 2);
    switch(e.img){
      case 0:
      context.drawImage(b0Img, -e.r, -e.r, 2*e.r, 2*e.r);
      break;
      case 1:
      context.drawImage(b1Img, -e.r, -e.r, 2*e.r, 2*e.r);
      break;
      case 2:
      context.drawImage(b2Img, -e.r, -e.r, 2*e.r, 2*e.r);
      break;
      case 3:
      context.drawImage(b3Img, -e.r, -e.r, 2*e.r, 2*e.r);
      break;
      case 4:
      context.drawImage(b4Img, -e.r, -e.r, 2*e.r, 2*e.r);
      break;
    }
    context.restore();

  }
}


function moveGMen() {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var angle;

    if(cows.length > 0){
    var cow = cows[0]
    var dist = Math.sqrt(Math.pow((e.x - cow.x),2) + Math.pow((e.y - cow.y),2));
    for(k = 1; k < cows.length; k++){
      var d =  Math.sqrt(Math.pow((e.x - cows[k].x),2) + Math.pow((e.y - cows[k].y),2));
      if(d < dist){
        dist = d;
        cow = cows[k]
      }
    }

    if(e.x >= cow.x && e.y <= cow.y){
       angle = Math.atan((e.y - cow.y)/(e.x - cow.x)) + Math.PI;
     } else if(e.x <= cow.x && e.y <= cow.y){
       angle = Math.atan((e.y - cow.y)/(e.x - cow.x));
     } else if(e.x >= cow.x && e.y >= cow.y){
       angle = Math.atan((e.y - cow.y)/(e.x - cow.x)) + Math.PI;
     } else if(e.x <= cow.x && e.y >= cow.y){
       angle = Math.atan((e.y - cow.y)/(e.x - cow.x));
     }

    e.dir = angle;

    var x =  e.speed * Math.cos(e.dir);
    var y = e.speed * Math.sin(e.dir);

    e.x = e.x + x;
    e.y = e.y + y;

    for(g = 0; g < cows.length; g++){
        var distance = Math.sqrt(Math.pow((e.x - cows[g].x),2) + Math.pow((e.y - cows[g].y),2));
            if(distance < e.r + cows[g].r){
                killCow(g);
            }
    }

    } else {
      var angle;
      if(e.x >= p.x && e.y <= p.y){
         angle = Math.atan((e.y - p.y)/(e.x - p.x));
       } else if(e.x <= p.x && e.y <= p.y){
         angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
       } else if(e.x >= p.x && e.y >= p.y){
         angle = Math.atan((e.y - p.y)/(e.x - p.x));
       } else if(e.x <= p.x && e.y >= p.y){
         angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
       }
       e.dir = angle;

       var x =  e.speed * Math.cos(e.dir);
       var y = e.speed * Math.sin(e.dir);

       e.x = e.x + x;
       e.y = e.y + y;
     }
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
  addSplat(gMen[index].x, gMen[index].y);
  gMen.splice(index,1);
}
