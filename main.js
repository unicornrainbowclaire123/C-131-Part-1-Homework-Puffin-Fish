img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('puffin-fish.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("puffin", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("fish", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

    if(status != "")
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "s", object[i].x, objects[i].y);
        noFill();
        stroke("#FF0000")
        rect(object[i].x.y, objects[i].width, objects[i].height);
    }
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.dtect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}