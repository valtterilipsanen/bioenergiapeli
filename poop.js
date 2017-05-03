function poop(x,y){
  this.x = x;
  this.y = y;
  this.r = 10;
}

var poops = [new poop(400, 100)];

function drawPoops(ctx) {
  for(i = 0; i < poops.length; i++){
    var e = poops[i];
    var x = e.x;
    var y = e.y;
    ctx.beginPath();
    ctx.fillStyle = '#0000FF';
    ctx.arc(x, y, e.r, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  }
