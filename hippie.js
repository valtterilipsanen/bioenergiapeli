function hippie(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
}

var eSize = 20;
var eSpeed = 2;

var hippies = [new hippie(100, 100, 10, 3, 2)];

function drawHippies(context) {
  for(i = 0; i < hippies.length; i++){
    var e = hippies[i];
    var x = e.x;
    var y = e.y;
    context.beginPath();
    context.fillStyle = '#FFFF00';
    context.arc(x, y, e.r, 0, 2*Math.PI);
    context.fill();
    context.closePath();
  }
}


function moveHippies() {
  for(i = 0; i < hippies.length; i++){


  }
}
