song="";
console.log("now will this work plz!");
function preload(){
    song = loadSound("Song1.mp3");
    console.log("REALLY IS THIS WORKING!!!?!??!?!?!?");
}
    
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    console.log("is this workin!!?!?!?!!?!?");
}
    
function draw(){
    image(video,0,0,600,500);
}
    
function play(){
    song.play();
    console.log("did dis play?");
}