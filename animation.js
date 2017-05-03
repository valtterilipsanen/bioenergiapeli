


$(document).ready(function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  document.body.appendChild(canvas);

/* Listen to keyboard events */
  var keysDown = {};




  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);

  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });

  window.addEventListener("keydown",function(e){
      if([37,38,39,40].indexOf(e.keyCode)>-1){
          e.preventDefault();
      }
  });



var counter = 0;
var render = function() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,width,height);
  movePlayer();
  moveGMen();
  drawHippies(ctx);
  drawGMen(ctx)
  drawPlayer(ctx);

};

/* Update stuff every loop */
var update = function(delta) {
    if (37 in keysDown) {
      changeDir("left");
    }
    if (39 in keysDown) {
      changeDir("right");
    }

};

/* Time-based motion animation */
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

var then = Date.now();
main();

});
