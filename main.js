var status = ""

function preload() {

}

function setup() {
    let cnv = createCanvas(380, 380)
    cnv.position(530, 340);
    video = createCapture(VIDEO)
    video.hide()
    video.size(380, 380)
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded())
    document.getElementById("number_of_objects").innerHTML = "Status: Detecting Objects"

}

function modelLoaded() {
    console.log("Model is Loaded")
    status = true
}

function draw() {
    image(video, 0, 0, 380, 380)
}