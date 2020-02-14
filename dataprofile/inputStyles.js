let button1;

let button2;

let rSlider;
let gSlider;
let bSlider;
let modem;
// let playSound;
function preload(){
  modem = loadSound("audio/ModemSound.mp3");
}

function setup(){
  createCanvas(200,200);

  button1 = createButton("button 1");
  button1.mousePressed(playSound);
  button2 = createButton("button 2");
    button1.addClass("button1");
    button2.addClass("button2");

    rSlider = createSlider(0, 255, 0);
      rSlider.addClass("rSlider");
    gSlider = createSlider(0, 255, 0);
    bSlider = createSlider(0, 255, 0);

}

function playSound(){
  button1.hide();
  if(modem.isPlaying()){
    modem.stop();
  }else{
    modem.rate(.25);
    modem.loop();
  }
}
function draw(){
  background(rSlider.value(), gSlider.value(), bSlider.value());

}
