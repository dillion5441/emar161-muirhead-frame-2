let img;

function preload() {
img = loadImage('House Frame 2-min.png');
}

function setup() {
createCanvas(800, 450);
img.resize(800, 450);
}

function draw() {
background(220);
image(img, 0, 0);

////structure

line(120, 164, 120, 220);
strokeWeight(4);
stroke('yellow');

line(103, 163, 132, 160);
strokeWeight(4);
stroke('yellow');

line(132, 160, 160, 160);
strokeWeight(4);
stroke('yellow');

 line(160, 160, 200, 156);
strokeWeight(4);
stroke('yellow');

  line(200, 156, 295, 156);
strokeWeight(4);
stroke('yellow');

 line(295, 156, 295, 130);
strokeWeight(4);
stroke('yellow');

 line(285, 130, 435, 130);
strokeWeight(4);
stroke('yellow');

  line(435, 130, 443, 125);
strokeWeight(4);
stroke('yellow');


  line(442, 125, 540, 125);
strokeWeight(4);
stroke('yellow');


  line(532, 125, 529, 153);
strokeWeight(4);
stroke('yellow');

line(529, 153, 630, 153);
strokeWeight(4);
stroke('yellow');

line(630, 153, 675, 150);
strokeWeight(4);
stroke('yellow');

  line(675, 150, 722, 160);
strokeWeight(4);
stroke('yellow');

  line(710, 160, 710, 215);
strokeWeight(4);
stroke('yellow');



////posts

line(203, 223, 203, 270);
strokeWeight(4);
stroke('yellow');

line(275, 223, 275, 274);
strokeWeight(4);
stroke('yellow');

 line(290, 223, 290, 274);
strokeWeight(4);
stroke('yellow');

line(363, 223, 363, 274);
strokeWeight(4);
stroke('yellow');

line(379, 223, 379, 274);
strokeWeight(4);
stroke('yellow');

line(450, 223, 450, 274);
strokeWeight(4);
stroke('yellow');

line(464, 223, 464, 274);
strokeWeight(4);
stroke('yellow');


line(536, 223, 536, 274);
strokeWeight(4);
stroke('yellow');

line(549, 223, 549, 274);
strokeWeight(4);
stroke('yellow');

line(603, 223, 603, 274);
strokeWeight(4);
stroke('yellow');

line(619, 223, 619, 274);
strokeWeight(4);
stroke('yellow');

line(678, 223, 678, 274);
strokeWeight(4);
stroke('yellow');

line(693, 222, 693, 270);
strokeWeight(4);
stroke('yellow');

line(693, 222, 710, 216);
strokeWeight(4);
stroke('yellow');

///post tops

line(203, 223, 275, 222);
strokeWeight(4);
stroke('yellow');

line(290, 222, 362, 222);
strokeWeight(4);
stroke('yellow');

line(380, 222, 449, 222);
strokeWeight(4);
stroke('yellow');

line(465, 222, 535, 222);
strokeWeight(4);
stroke('yellow');

line(550, 222, 603, 222);
strokeWeight(4);
stroke('yellow');

line(620, 222, 677, 222);
strokeWeight(4);
stroke('yellow');

///text

fill(0);
textSize(32);
textFont('bebas kai');
text('House Frame 2', 620, 430);

}