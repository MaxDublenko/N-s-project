let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let objY1 = 330;
let objY2 = 400;
let objY3 = 400;
let objX1 = 198;
let objX2 = 168;
let objX3 = 228;

requestAnimationFrame(draw)

function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height)

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(objX1, objY1);
  ctx.lineTo(objX2, objY2);
  ctx.lineTo(objX3, objY3);
  ctx.fill();

  if (objX2 < -2) {
    objX1 = 198;
    objX2 = 168;
    objX3 = 228;
  } else if (objX3 > 408) {
    objX1 = 198;
    objX2 = 168;
    objX3 = 228;
  } else if (objY1 === 0) {
    objY1 = 330;
    objY2 = 400;
    objY3 = 400;
  } else if (objY1 > 330) {
    objY1 = 330;
    objY2 = 400;
    objY3 = 400;
    objX1 = 198;
    objX2 = 168;
    objX3 = 228;
  }

  if (wallPlace) {
    ctx.fillStyle = 'red';
    ctx.fillRect(wall.x, wall.y, wall.sx, wall.sy);
  }

  requestAnimationFrame(draw)

}

let dir = 'none';

document.addEventListener('keydown', keyPush)

function keyPush(evt) {
  switch(evt.keyCode) {
    case 37:
      objX1 -= 10;
      objX2 -= 10;
      objX3 -= 10;
      dir = 'left';
      break;
    case 38:
      objY1 -= 10;
      objY2 -= 10;
      objY3 -= 10;
      dir = 'up';
      break;
    case 39:
      objX1 += 10;
      objX2 += 10;
      objX3 += 10;
      dir = 'right';
      break;
    case 40:
      objY1 += 10;
      objY2 += 10;
      objY3 += 10;
      dir = 'down';
      break;
    case 32:
      p();
      break;
  };
};

let wallPlace = false;

let wall = {
  sx: 10,
  sy: 70,
  x: 0,
  y: 0
}

function p() {
  if (dir === 'left') {
    wall.x = objX2 - 10;
    wall.y = objY2 - 70;
    wall.sx = 10;
    wall.sy = 70;
  } else if (dir === 'right') {
    wall.x = objX3;
    wall.y = objY3 - 70;
    wall.sx = 10;
    wall.sy = 70;
  } else if (dir === 'up') {
    wall.x = objX2;
    wall.y = objY1 - 10;
    wall.sx = 60;
    wall.sy = 10;
  } else if (dir === 'down') {
      wall.x = objX2;
      wall.y = objY2;
      wall.sx = 60;
      wall.sy = 10;
  }
  wallPlace = true
}
