function hippie(x,y,r,speed,dir,state) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
 this.state = state;
 var poo;
}

var eSize = 20;
var eSpeed = 1;

var hippies = [new hippie(100, 100, 10, eSpeed, 2, false)];

function drawHippies(context) {
  for(i = 0; i < hippies.length; i++){
    var e = hippies[i];
    var x = e.x;
    var y = e.y;
    context.beginPath();
    context.fillStyle = '#00FF00';
    context.arc(x, y, e.r, 0, 2*Math.PI);
    context.fill();
    context.closePath();
  }
}


function moveHippies() {
  for(i = 0; i < hippies.length; i++){
    var e = hippies[i];
    if(!e.state){
    var poop = poops[0]
    var dist = Math.sqrt(Math.pow((e.x - poops[0].x),2) + Math.pow((e.y - poops[0].y),2));
    for(k = 1; k < poops.length; k++){
      var d =  Math.sqrt(Math.pow((e.x - poops[k].x),2) + Math.pow((e.y - poops[k].y),2));
      if(d < dist){
        dist = d;
        poop = poops[k]
      }
    }

    var angle;
    if(e.x >= poop.x && e.y <= poop.y){
       angle = Math.atan((e.y - poop.y)/(e.x - poop.x)) + Math.PI;
     } else if(e.x <= poop.x && e.y <= poop.y){
       angle = Math.atan((e.y - poop.y)/(e.x - poop.x));
     } else if(e.x >= poop.x && e.y >= poop.y){
       angle = Math.atan((e.y - poop.y)/(e.x - poop.x)) + Math.PI;
     } else if(e.x <= poop.x && e.y >= poop.y){
       angle = Math.atan((e.y - poop.y)/(e.x - poop.x));
     }

    e.dir = angle;

    var x =  e.speed * Math.cos(e.dir);
    var y = e.speed * Math.sin(e.dir);

    e.x = e.x + x;
    e.y = e.y + y;

    if(dist < e.r ){
      e.state = true;
      e.poo = poop;
      poops.splice(poops.indexOf(poop),1);
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

function killHippie(index){
  hippies.splice(index,1);
}
