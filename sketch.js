

var colors;
var type;
var r;
var numberOfWaves, waveCorrectionValue;

function setup() {
    createCanvas(1920, 1080);
  
    colors = [
      color(50, 490, 80),
      color(70, 340, 44),
      color(77, 29, 150)
    
    ];
  
    type = 0;
    
    r = height/3;
    numberOfWaves = 2;
    waveCorrectionValue = 0.001;
}

function draw() {
    blendMode(BLEND);
    if(type == 0) {
        background(7,32, 160);
        blendMode(SCREEN);

    } else {
        background(55);
        blendMode(EXCLUSION);
    }
    noFill();
    strokeWeight(7);
    
    translate(width/2, height/2);
    
    for(var i = 0; i < 3; i++){
        stroke(colors[i]);
        beginShape();
        for(var w = -20; w < width + 20; w +=5){
            var r2 = 100 * sin(w * 0.1 + i * TWO_PI / 3) * pow(abs(sin(w * PI * waveCorrectionValue * numberOfWaves + frameCount * 0.02)), 50);
            
            var cX = sin(w * TWO_PI / (width+40)) * (r + r2);
            var cY = cos(w * TWO_PI / (width+40)) * (r + r2);
            curveVertex(cX, cY);
        }
        endShape(CLOSE);
    }
}
    
    
function mousePressed() {
    if(type == 0) {
        type = 1;
    } else {
        type = 0;
    }
}