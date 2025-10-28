function setup () {
    createCanvas(windowWidth, windowHeight);
}
function draw () {
    background(0, 10);
}

function windowResized() {
    //resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    stroke(0);
    fill(300, 100);
    //const red = Math.abs(Math.sin(frameCount * 0.01) * 255);
    //const green = Math.abs(Math.sin(frameCount * 0.02) * 255);
    //const blue = Math.abs(Math.sin(frameCount * 0.03) * 255);   
    //fill (red, green, blue);
    const size = Math.sin(frameCount * .01) * 100;
    ellipse(mouseX, mouseY, size, size);
    //rect (mouseX, mouseY, size, size);
    
}