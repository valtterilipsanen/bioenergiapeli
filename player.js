
function player(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;


}
var pSpeed = 4;
var windowWidth = Math.max(window.innerWidth - 25, 1150);
var windowHeight = window.innerHeight - 25;

var width = Math.min(window.innerWidth - 25, 1920);
var height = Math.min(window.innerHeight - 25, 1276) - 100;


var p = new player(width / 2, height / 2, 20, pSpeed, 0);

function changeDir(dir) {
  switch(dir) {
    case "left":
    p.dir = p.dir - 0.07
    break;
    case "right":
    p.dir = p.dir + 0.07
    break;
  }
}

function drawPlayer(context) {
  var x = p.x;
  var y = p.y;
  context.beginPath();
  context.fillStyle = '#FF0000';
  context.arc(x, y, p.r, 0, 2*Math.PI);
  context.fill();
  context.closePath();
}





function movePlayer() {

var x = p.speed * Math.cos(p.dir);
var y = p.speed * Math.sin(p.dir);
var oldX = p.x;
var oldY = p.y;

p.x = p.x + x;
p.y = p.y + y;

if(p.x <= p.r ||p.x >= width - p.r){
  p.x = oldX;
}
if(p.y <= p.r || p.y >= height - p.r){
  p.y = oldY;
}

for(i = 0; i < cows.length; i++){
var e = cows[i];
var dist = Math.sqrt(Math.pow((p.x - e.x),2) + Math.pow((p.y - e.y),2));
if(dist < p.r + e.r){
  killCow(i);
 }
}

 for(i = 0; i < hippies.length; i++){
 var e = hippies[i];
 var dist = Math.sqrt(Math.pow((p.x - e.x),2) + Math.pow((p.y - e.y),2));
 if(dist < p.r + e.r){
   killHippie(i);
  }
}

for(i = 0; i < gMen.length; i++){
var e = gMen[i];
var dist = Math.sqrt(Math.pow((p.x - e.x),2) + Math.pow((p.y - e.y),2));
if(dist < p.r + e.r){
  killGMan(i);
 }
}


/*  switch (dir) {
    case "left":
      p.x -= p.speed;
      if (p.x < 20) {
        p.x = 20;
      }
      break;
    case "right":
      p.x += p.speed;
      if (p.x > width - 20) {
        p.x = width - 20;
      }
      break;
    case "up":
      p.y -= p.speed;
      if (p.y < 20) {
        p.y = 20;
      }
      break;
    case "down":
      p.y += p.speed;
      if (p.y > height - 20) {
        p.y = height - 20;
      }
      break;
  }
  */
}
