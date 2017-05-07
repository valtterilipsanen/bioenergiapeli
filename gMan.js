function gMan(x,y,r,speed,dir) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.speed = speed;
 this.dir = dir;
}

var eSize = 10;
var eSpeed = 3;

var gMen = [new gMan(500, 500, eSize, eSpeed, 2)];

function drawGMen(context) {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var x = e.x;
    var y = e.y;
    context.beginPath();
    context.fillStyle = '#FFFF00';
    context.arc(x, y, e.r, 0, 2*Math.PI);
    context.fill();
    context.closePath();
  }
}


function moveGMen() {
  for(i = 0; i < gMen.length; i++){
    var e = gMen[i];
    var angle;

    if(e.x >= p.x && e.y <= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
     } else if(e.x <= p.x && e.y <= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x));
     } else if(e.x >= p.x && e.y >= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x)) + Math.PI;
     } else if(e.x <= p.x && e.y >= p.y){
       angle = Math.atan((e.y - p.y)/(e.x - p.x));
     }

    e.dir = angle;

    var x =  e.speed * Math.cos(e.dir);
    var y = e.speed * Math.sin(e.dir);

    e.x = e.x + x;
    e.y = e.y + y;
    }
}

var manCanAdd = true;
function addGMan() {


    if(manCanAdd){
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

        if(counter >= 1000) manCanAdd = false;

    }
    if(counter < 1000){


    var dir = (parseFloat(getRandomInteger(0,360)) / 360) * 2* Math.PI;

    gMen.push(new gMan(newX, newY, eSize, eSpeed, dir));

    }
}
}


function killGMan(index){
  gMen.splice(index,1);
}
