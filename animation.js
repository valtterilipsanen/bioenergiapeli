

var score = 0;
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
    if(!(37 in keysDown && 39 in keysDown) || !((37 in keysDown || 39 in keysDown))){
      p.img = "s";
    }
  });

  window.addEventListener("keydown",function(e){
      if([37,38,39,40].indexOf(e.keyCode)>-1){
          e.preventDefault();
      }
  });




var render = function() {
  ctx.fillStyle = '#00FF00';
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = '#000000';
  ctx.font = "30px Georgia"
  ctx.fillText("Score: " + score, 5, 30);
  cowTick();
  gManTick();
  hippieTick();
  playerTick();
  splatTick();
  movePlayer();
  moveHippies();
  moveGMen();
  moveCows();
  drawSplatter(ctx);
  drawPoops(ctx);
  drawHippies(ctx);
  drawCows(ctx);
  drawGMen(ctx)
  drawPlayer(ctx);

};

/* Update stuff every loop */
var update = function(delta) {
    if (37 in keysDown) {
      p.img = "l";
      changeDir("left");
    }
    if (39 in keysDown) {
      p.img = "r";
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

function getRandomInteger( min, max ){
    var difference = max - min;

    var number = parseInt(Math.round(Math.random() * difference + min));
    return number;
}
