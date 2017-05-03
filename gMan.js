function gMan(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
}

var eSize = 20;
var eSpeed = 3;

var gMen = [new gMan(500, 500, 10, eSpeed, 2)];

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
