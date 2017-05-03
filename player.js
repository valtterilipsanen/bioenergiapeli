
function player(x,y,r,speed,dir,frame,ticks) {
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

/* Player */
var plMod = -30;

var p = new player(width / 2,height / 2,69,pSpeed, 0);



function drawPlayer(ctx, keys) {

}




function movePlayer(dir) {
}
