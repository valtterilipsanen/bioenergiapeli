var c0Img = new Image();



$(document).ready(function() {

c0Img.src = "assets/sprites/cow.png"



});


function cow(x,y,r,speed,dir, counter) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
 this.counter = counter;
 this.img = 0;
}


var width = 900;
var height = 700;
var eSize = 40;
var eSpeed = 2;



var cows = [new cow(300,300,eSize,eSpeed,0, 0), new cow(600,300,eSize,eSpeed,1, 120), new cow(400,500,eSize,eSpeed,1, 500) ];

function drawCows(context) {
  for(i = 0; i < cows.length; i++){
  var e = cows[i];

  context.save();
  context.translate(e.x,e.y);
  context.rotate(e.dir + Math.PI / 2);
  switch(e.img){
    case 0:
    context.drawImage(c0Img, -e.r, -e.r, 2*e.r, 2*e.r);
    break;
    case 1:
    context.drawImage(c0Img, -e.r, -e.r, 2*e.r, 2*e.r);
    break;
    case 2:
    context.drawImage(c0Img, -e.r, -e.r, 2*e.r, 2*e.r);
    break;
    case 3:
    context.drawImage(c0Img, -e.r, -e.r, 2*e.r, 2*e.r);
    break;
  }
  context.restore();
  }
}

function cowTick(){
  for(i = 0; i < cows.length; i++){
    var e = cows[i];
    e.counter += 1;
    if(e.counter > 1000){
      e.counter = 0;
      shit(e);
    }
    if(e.counter % 10 == 0){
      switch(e.img){
        case 0:
        e.img = 1;
        break;
        case 1:
        e.img = 2;
        break;
        case 2:
        e.img = 3;
        break;
        case 3:
        e.img = 0;
        break;
      }
    }

    }
  }


function moveCows() {

     for(i = 0; i < cows.length; i++){
         var e = cows[i];
         var oldX = e.x;
         var oldY = e.y;
         e.x = e.x + (Math.cos(e.dir) * e.speed);
         e.y = e.y + (Math.sin(e.dir) * e.speed);

         if(e.x < e.r){
             e.x = e.r;
             e.dir = Math.PI - (e.dir % (2 * Math.PI));
         }
         if(e.x > width - e.r){
             e.x = width - e.r;
             e.dir = Math.PI - (e.dir % (2 * Math.PI)) ;

         }
         if(e.y < e.r){
             e.y = e.r;
             e.dir = -e.dir;
         }
         if(e.y > height - e.r){
             e.y = height - e.r;
             e.dir = -e.dir;
         }

         for(k = 0; k < cows.length; k++){
            var distance = Math.sqrt(Math.pow((e.x - cows[k].x),2) + Math.pow((e.y - cows[k].y),2));
             if (!(e.x == cows[k].x && e.y == cows[k].y)){

                  if(distance < 2 * e.r){
                 e.x = oldX;
                 e.y = oldY;
                 var angle = 0;
                 var en = cows[k];

                 if(e.x >= en.x && e.y <= en.y){
                     angle = Math.atan((e.y - en.y)/(e.x - en.x));
                 } else if(e.x <= en.x && e.y <= en.y){
                     angle = Math.atan((e.y - en.y)/(e.x - en.x)) + Math.PI;
                 } else if(e.x >= en.x && e.y >= en.y){
                     angle = Math.atan((e.y - en.y)/(e.x - en.x));
                 } else if(e.x <= en.x && e.y >= en.y){
                     angle = Math.atan((e.y - en.y)/(e.x - en.x)) + Math.PI;
                 }

             e.dir = angle;
             en.dir = angle + Math.PI;


             }
           }
         }

         if(Math.sqrt(Math.pow((e.x-p.x),2) + Math.pow((e.y-p.y),2)) < p.r + e.r){
             e.x = oldX;
             e.y = oldY;
             var angle = 0;

                 if(e.x >= p.x && e.y <= p.y){
                     angle = Math.atan((e.y - p.y)/(e.x - p.x));
                 } else if(e.x <= p.x && e.y <= p.y){
                     angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
                 } else if(e.x >= p.x && e.y >= p.y){
                     angle = Math.atan((e.y - p.y)/(e.x - p.x));
                 } else if(e.x <= p.x && e.y >= p.y){
                     angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
                 }

             e.dir = angle
         }
         for(y = 0; y < hippies.length; y++){
           var h = hippies[y];
           var d = Math.sqrt(Math.pow((e.x - h.x),2) + Math.pow((e.y - h.y),2));
           if(d < h.r + e.r){
             killHippie(y);
           }
         }

         for(y = 0; y < gMen.length; y++){
           var h = gMen[y];
           var d = Math.sqrt(Math.pow((e.x - h.x),2) + Math.pow((e.y - h.y),2));
           if(d < h.r + e.r){
             killGMan(y);
           }
         }

     }
}

function killCow(index){
  cows.splice(index,1);
}

var cowCanAdd = true;
function addCow() {


    if(cowCanAdd){
    var newX = 0;
    var newY = 0;
    var counter = 0;

    var flag = false;
    while(flag === false && counter < 1000){
        newX = getRandomInteger(eSize, width - eSize);
        newY = getRandomInteger(eSize, height - eSize);

        flag = true;
        for(k = 0; k < cows.length; k++){
            var distance = Math.sqrt(Math.pow((newX - cows[k].x),2) + Math.pow((newY - cows[k].y),2));
                if(distance < 2 * eSize){
                    flag = false;
                }
        }

        for(h = 0; h < hippies.length; h++){
            var distance = Math.sqrt(Math.pow((newX - hippies[h].x),2) + Math.pow((newY - hippies[h].y),2));
                if(distance < eSize + hippies[h].r){
                    flag = false;
                }
        }

        for(g = 0; g < gMen.length; g++){
            var distance = Math.sqrt(Math.pow((newX - gMen[g].x),2) + Math.pow((newY - gMen[g].y),2));
                if(distance < eSize + gMen[g].r){
                    flag = false;
                }
        }
        var distance = Math.sqrt(Math.pow((newX - p.x),2) + Math.pow((newY - p.y),2));
        if(distance < eSize + p.r){
            flag = false;
        }

        counter = counter + 1;

        if(counter >= 1000) cowCanAdd = false;

    }
    if(counter < 1000){


    var dir = (parseFloat(getRandomInteger(0,360)) / 360) * 2* Math.PI;
    var count = getRandomInteger(0,1000);

    cows.push(new cow(newX, newY, eSize, eSpeed, dir, count));

    }
  }
}

function shit(cow) {
  addPoop(cow.x,cow.y);
}
