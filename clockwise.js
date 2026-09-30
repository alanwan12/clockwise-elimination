canv=document.getElementById("gc");
ctx=canv.getContext("2d");
setSpeed = setInterval(eraseNum, 1000);

var circle = [];
var circle_copy = [];
var delNum = [];

var endNum = 13;
var endDrawNum = endNum;
var px = 750;
var py = 350;
var x;
var y;
var r = 250;
var wrap = 1;

for (i = 1; i <= endNum; i++) {
  circle.push(i);
  circle_copy.push(i);
}

for (j = 1; circle.length > 1; j++) {
  if (j > endNum) {
    j = wrap;
    wrap = 1;
  }
  
  if (j == circle.length) {
    wrap = 2;
  }
  
  delNum.push(circle.splice(j-1, 1));
  endNum = circle.length;
}

for (p = 90, q = 0; q < endDrawNum; p -= 360/endDrawNum, q++) {
  ctx.font = "40px Arial";
  ctx.fillStyle = "black";
  x = r*(Math.cos(p*Math.PI/180));
  y = r*(Math.sin(p*Math.PI/180));
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(circle_copy[q], px+x, py-y);
}

// for (l = 90, z = 0; z < delNum.length; z++, l -= (delNum[z]-1) * (360/endDrawNum)) {
//   ctx.fillStyle = "white";
//   x = r*(Math.cos(l*Math.PI/180));
//   y = r*(Math.sin(l*Math.PI/180));
//   ctx.fillText(delNum[z], px+x, py-y);
//   l = 90;
// }

function eraseNum() {
  if (delNum.length != 0) {
    l = 90 - (delNum[0]-1) * (360/endDrawNum);
    
    ctx.fillStyle = "white";
    x = r*(Math.cos(l*Math.PI/180));
    y = r*(Math.sin(l*Math.PI/180));
    ctx.fillText(delNum[0], px+x, py-y);
    delNum.splice(0, 1);
  }
}

console.log(circle);
console.log(delNum);