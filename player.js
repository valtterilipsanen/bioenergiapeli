
function player(x,y,speed,dir) {
 this.x = x;
 this.y = y;
 this.speed = speed;
 this.dir = dir;


}
var pSpeed = 4;
var windowWidth = Math.max(window.innerWidth - 25, 1150);
var windowHeight = window.innerHeight - 25;

var width = Math.min(window.innerWidth - 25, 1920);
var height = Math.min(window.innerHeight - 25, 1276) - 100;


var p = new player(width / 2,height / 2,pSpeed, 0);



function drawPlayer(ctx, keys) {
  var x = p.x;
  var y = p.y;
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(x,y,20,20);
}





function movePlayer(dir) {
  switch (dir) {
    case "left":
      player.x -= player.speed;
      if (player.x < 20) {
        player.x = 20;
      }
      break;
    case "right":
      player.x += player.speed;
      if (player.x > width - 20) {
        player.x = width - 20;
      }
      break;
    case "up":
      player.y -= player.speed;
      if (player.y < 20) {
        player.y = 20;
      }
      break;
    case "down":
      player.y += player.speed;
      if (player.y > height - 20) {
        player.y = height - 20;
      }
      break;
  }
}
