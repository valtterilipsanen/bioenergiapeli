var score = 0;
var gameOn = true;
function startGame(){
gameOn = true;
cows = [];
hippies = [];
gMen = [];
splats = [];
poops = [];
p = new player(width / 2, height / 2, 40, pSpeed, 0);
addCow();
addCow();
addCow();
addCow();
addCow();
}

$(document).ready(function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  document.body.appendChild(canvas);

  var bgImg = new Image();
  bgImg.src = "assets/sprites/yellowGrass.jpg"

  startGame();

/* Listen to keyboard events */
  var keysDown = {};



  var music = new Audio('assets/sounds/music.mp3')
  var startSound = new Audio('assets/sounds/start.wav')
  var tSound = new Audio('assets/sounds/tractor sound.wav');
  startSound.play();

  // Sound looping
  //http://stackoverflow.com/questions/7330023/gapless-looping-audio-html5
  // user: shooting_sparks
  startSound.addEventListener('timeupdate', function(){
                var buffer = 0.5;
                if(this.currentTime > this.duration - buffer){
                    tSound.play();
                    music.play();
                }}, false);
  tSound.addEventListener('timeupdate', function(){
                var buffer = 0.44;
                if(this.currentTime > this.duration - buffer){
                    this.currentTime = 0;
                    this.play();
                }}, false);

  music.addEventListener('timeupdate', function(){
                var buffer = 0.44;
                if(this.currentTime > this.duration - buffer){
                this.currentTime = 0;
                this.play();
                }}, false);



  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
     if(e.keyCode == 13){
       startGame();
     }
  }, false);

  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
    if((37 in keysDown && 39 in keysDown) || !((37 in keysDown || 39 in keysDown))){
      p.img = "s";
    }
  });

  window.addEventListener("keydown",function(e){
      if([37,38,39,40].indexOf(e.keyCode)>-1){
          e.preventDefault();
      }
  });




var render = function() {
  if(gameOn){
  for(i = 0; i < width / 200; i++){
    for(k = 0; k < height / 200; k++){
      ctx.drawImage(bgImg, i * 200, k * 200, 200, 200);
    }
  }
  ctx.drawImage(bgImg,0,0, 100, 100)
  ctx.fillStyle = '#000000';
  ctx.font = "30px Georgia"
  ctx.fillText("Score: " + score, 5, 30);

  cowTick();
  gManTick();
  hippieTick();
  playerTick();
  splatTick();
  moveCows();
  movePlayer();
  moveHippies();
  moveGMen();
  drawSplatter(ctx);
  drawPoops(ctx);
  drawHippies(ctx);
  drawCows(ctx);
  drawGMen(ctx)
  drawPlayer(ctx);
}

};

/* Update stuff every loop */
var update = function(delta) {

  if(37 in keysDown && 39 in keysDown){
    p.img = "s";
  } else if (37 in keysDown) {
      p.img = "l";
      changeDir("left");
    }else if(39 in keysDown) {
      p.img = "r";
      changeDir("right");
    }
    if(cows.length == 0){
      gameOn = false;
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
