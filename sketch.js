var hr, mn, sc;

function setup() {
  createCanvas(400,400);
  
}


function draw() {
  background(0);
  stroke ("white");
  fill ("white");
  text ("when all the arc's are aligned straight you can escape!",30,370);

  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES); 
  
  scAngle = map(sc,0,60,0,360);
    mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  console.log(hrAngle);
  translate(200,200);

  push ();
  rotate(scAngle)
stroke (191,173,51);
strokeWeight(3);
line(-30,0,100,0);
noFill();
strokeWeight(3)
arc(0,0,230,230,360,-scAngle); 
  pop ();

  push ();
  rotate(mnAngle)
stroke (244,174,200);
strokeWeight(7);
line(-20,0,90,0); 
noFill();
strokeWeight(5)
arc(0,0,260,260,360,-mnAngle);
  pop ();

  push ();
  rotate(hrAngle)
stroke (244,174,200);
strokeWeight(7);
line(-20,0,75,0); 
noFill();
strokeWeight(5)
arc(0,0,290,290,360,-hrAngle);
  pop ();

 
//218,177,175
  push ();
stroke ("black");
strokeWeight(5);
line(0,0,1,0); 
  pop ();


 

}