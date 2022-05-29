status = "";

function setup() {
    canvas = createCanvas(480, 350);
    
    video = createCapture(VIDEO);
    video.size(480, 350);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 350);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectName = document.getElementById("objectName").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}