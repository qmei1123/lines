function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(118,238,198);
    //line following mouse
    strokeWeight(1.2);

     
//    for (i = 30; i < width - 140; i+=65) {
//        for (j = height/7; j < 4*height/7; j+=20) {
//  //custom shape 
//            beginShape();
//            noFill();
//            stroke(255,255,237);
//
//            let vertices = map(mouseX, 0, width, 5, 50);
//
//            for(let a = 0; a < 360; a += vertices) {
//                let x = 25 * sin(a) + 180;
//                let y = 50 * cos(a) + 180;
//                vertex (x + random(i-10, i) - 90, y + random(j));
//            }
//            endShape(CLOSE);
//        }
//    }
     for (i = -180; i < width; i+=50) {
        for (j = -180; j < height; j+=65) {
  //custom shape 
            beginShape();
            fill(0,139,139,20);
            let strokeOpacity = map(mouseX, width, 0, 10, 100);

            stroke(0,139,139,strokeOpacity);

            let vertice = map(mouseX, 0, width, 5, 50);

            for(let a = 0; a < 360; a += vertice) {
                let x = 30 * sin(a) + random(10,180);
                let y = 40 * cos(a) + random(10,180);
                vertex (x + random(i-10, i+10) - 90, y + random(j-10, j+10));
            }
            endShape(CLOSE);
        }
    }
    
    for (i = -180; i < width; i+=50) {
        for (j = -180; j < height; j+=65) {
  //custom shape 
            beginShape();
            fill(252,231,223,30);
            let strokeOpacity = map(mouseX, width, 0, 10, 100);

            stroke(252,231,223,strokeOpacity);

            let vertices = map(mouseX, 0, width, 5, 50);

            for(let a = 0; a < 360; a += vertices) {
                let x = 25 * sin(a) + random(10,180);
                let y = 50 * cos(a) + random(10,180);
                vertex (x + random(i-10, i+10) - 90, y + random(j-10, j+10));
            }
            endShape(CLOSE);
        }
    }
}