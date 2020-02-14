
let img;
let gif;
let generateMap;
let generateTwo;

let video;

let birds;
let bark;
let michael;
let bus;
let drtyler;

let tintVideo;
let slider;
let sliderTwo;
let sliderThree;
let sliderFour;
let allSelfies = [];

let badButton;
let goodButton;
let otherButton;
let anotherButton;

let selfieImageVar;

let videoX = [];
let videoY = [];

let camData= "41 53 12.018 N, 87 37 28.35 W, 41 53 8.88 N, 87 37 29.838 W, 41 53 8.52 N, 87 37 27.942 W, 41 53 8.01 N, 87 37 32.502 W, 42 53 8.712 N, 87 37 36.48 W, 41 53 8.478 N, 87 37 43.158 W, 41 52 46.488 N, 87 37 28.872 W, 41 53 7.572 N, 87 37 53.568 W, 41 53 4.17 N, 87 37 52.662 W, 41 52 52.038 N, 87 37 34.89 W, 41 52 32.088 N, 87 41 14.892 W, 41 52 29.7 N, 87 41 10.962 W, 41 52 50.052 N, 87 37 40.68 W, 41 52 55.47 N, 87 37 29.808 W, 41 52 49.608 N, 87 39 21.462 W, 41 52 49.86 N, 87 39 21.21 W, 41 52 49.788 N, 87 39 21.288 W, 41 52 49.512 N, 87 39 0.228 W, 41 52 49.65 N, 87 38 51.018 W, 41 53 7.602 N, 87 37 51.81 W, 41 52 49.398 N, 87 38 42.072 W, 41 52  52.362 N, 87 38 33.78 W, 41 52 48.33 N, 87 38 23.148 W ";
let pOne= "Use dark lights, hand gestures,Trance like state.Open to suggestion ,Altered state,Non state theory,Still aware playing along,Voluntary process ,Top down processing,What you expect effects what you perceive with your perception,Placebo effect,How powerful our brains are,Become all you can be,Everyday in everyday I’m getting better and better,The will always yields to the imagination,If we can control the sunbconcious then we can release the influence of the imagination on the moral and physical being of man kind Emile coue 1922,Everyone of our thoughts good or bad becomes concrete- in short it becomes our reality,Thought into matter - suggestion,Expectation leads to actuality,Subconscious can rewrite what we are shown,Seeing things not with the eye but in the mind,Marcel Duchamp anti-retinal art,Artist connects to audience mind, service to the audiences mind,Artists work can only ever be a suggestion- becomes an art principle when it becomes an auto suggestion- site activation,Creative act is not performed by the artists alone,Autosuggestion nothing but hypnotism,Will distracted, while the conscious mind is distracted hypnostist can address the subcpncious, once the subconscious is accessed anything is possible,Anti-retinal art,I don’t believe the power of suggestion is taken seriously, google search proves this. I believe it is an untapped resource that allows artists to connect with an audience in a way that fully engages them, allowing them to escape the perceived bounds of reality, and to fully immerse themselves in a world we present to them,As artists making instillation work, as well as video, we often are asking our audiences to suspend disbelief for a period of time, to pretend that what we are. Showing them is not just a projection on a wall, or an image playing on a screen, but something four dimensional and all encompassing,Animal magnetism, Month,dayTheodora,dec,9Tyler,feb,10Katie,feb,5Sophia,may,17EmilyD,april,14Evan,april,24Peter,june,21John,june,30Sherri,march,4Irene,june,16Eilee,may,12Annie,feb,24Jeemin,nov,24Emily,sep,29Raykeidrik,sep,17Chloe,march,2Sammy,nov,22Ashley,nov,15Sintan,feb,20Alice,sep,26Darcy,nov,22Daniel,nov,17";

let pTwo= "and I think thats something very special. i’m still going to do it tho and get past the embarrassment bc im interested in what i’ve planned and it actually got me excited for once. i just like don’t know how to respond but i’m going to think ab it. bc i kind of want to get it over w so i’m not thinking ab anymore. it was a rly great email. u can drop it off my roof. dear biffy, i rly rly need us to become a pop duo... get back to me soon. i patiently await your response thank you so much in advance -Tyler. dearest apologies, puppycat was licking my arm for a long time. i of course say yes to this proposition - biffy. awesome! glad to hear that.see you in class tomorrow! thanks again -tyler. i emailed him my project bc he 4got to ask me to present but i felt awkward interrupting so i just sent him a message with my project linked and explaining my thought process. i was just nervous 2. “just when i thought it seen it all” made me laugh. it frustrates me when ppl wont take responsibility for like the power of the words u use with other people or choosing not to listen. Tysm buggy. my answer is probably yes. i think you could really do whatever you want. do u wanna write our song on friday and saturday. No I haven’t even got her number yet lol. I wonder if i will ever feel like i actually know anything.I wonder if i will ever feel like i actually know anything. I wonder if i will ever feel like i actually know anything  I wonder if i will ever feel like i actually know anything  I wonder if i will ever feel like i actually know anything  I wonder if i will ever feel like i actually know anything     "




function preload(){
  img = loadImage('images/sky.jpg');
  birds = loadSound('audio/birds.mp3');
  // camData = loadJSON('cameras.json');
  bark = loadSound('audio/bark.mp3');
  michael = loadSound('audio/michael.mp3');
  bus = loadSound('audio/bus.mp3');
  drtyler = loadSound('audio/drtyler.mp3');
  loadImages();

}

function loadImages(){
  for(let i = 0; i < 53; i++){
    allSelfies[i] = loadImage('images/' + i + '.jpg');
  }
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  image(img, 0, 0, img.width*2, img.height*2);
   // image.style('z-index', '-1');
   print(allSelfies);
  generateMap = createButton("**** map");
  generateMap.addClass("generateMap");
  generateMap.position(20,20);
  generateMap.style('z-index', '2');
    generateMap.mousePressed(playSound);
    // generateMap.mousePressed(locations);

    generateTwo = createButton("~~~ * Found it");
    generateTwo.addClass("generateTwo");
    generateTwo.position(120,20);
    generateTwo.style('z-index', '2');
      generateTwo.mousePressed(playSoundTwo);

      badButton = createButton("2/10/2020");
      badButton.addClass("badButton");
      badButton.position(250,20);
      badButton.style('z-index', '2');
        badButton.mousePressed(pictureGame);

        goodButton = createButton("from michael");
        goodButton.addClass("goodButton");
        goodButton.position(500,500);
        goodButton.style('z-index', '2');
          goodButton.mousePressed(playMichael);

          otherButton = createButton("monday");
          otherButton.addClass("otherButton");
          otherButton.position(500,575);
          otherButton.style('z-index', '2');
            otherButton.mousePressed(playBus);

            anotherButton = createButton("2/2/2020");
            anotherButton.addClass("anotherButton");
            anotherButton.position(500,425);
            anotherButton.style('z-index', '2');
              anotherButton.mousePressed(playVoicemail);

    createCapture(VIDEO);
    video = createCapture(VIDEO);
    video.size(320,240);
    video.hide();
    video.style("z-index", '-1');
    // tintVideo = createCapture(VIDEO);

  slider = createSlider(0,255,100);
  slider.position(500,20);
  slider.style('width', '80px');
  sliderTwo = createSlider(0,255,100);
  sliderTwo.position(600,20);
  sliderTwo.style('width', '80px');
  sliderThree = createSlider(0,255,100);
  sliderThree.position(700,20);
  sliderThree.style('width', '80px');
  sliderFour = createSlider(0,255,100);
  sliderFour.position(800,20);
  sliderFour.style('width', '80px');


 }
// function locations(){
//   textSize(12);
//   text(camData, 10, 10, 500, 500);
//   fill(255);
//
// }

function pictureGame(){
  selfieImageVar = int(random(allSelfies.length));
  //print(int(random(allSelfies.length)));
  // image(allSelfies[int(random(allSelfies.length))], 50, 50, 100,100);
}


function playSound(){
  // let valX = value.slider();
  // let valY = value.sliderTwo();
  let valTwo = sliderTwo.value();
  let valThree = sliderThree.value();
  textSize(12);
  text(camData, 10, 10, windowWidth, windowHeight);
  fill(255);
  // generateMap.hide();
  pOne.hide();
  pTwo.hide();
  if(birds.isPlaying()){
    birds.stop();
  }else{
    birds.loop();
  }
}
function playSoundTwo(){
  // let valX = value.slider();
  // let valY = value.sliderTwo();
  let valTwo = sliderTwo.value();
  let valThree = sliderThree.value();
  textSize(12);
  text(pTwo, 40, 40, windowWidth, windowHeight);
  text.style('z-index', '2');
  fill(255);
  generateTwo.hide();
  if(bark.isPlaying()){
    bark.stop();
  }else{
    bark.loop();
  }
}
function playMichael(){

  goodButton.hide();
  if(michael.isPlaying()){
    michael.stop();
  }else{
    michael.loop();
  }
}
function playBus(){

  if(bus.isPlaying()){
    bus.stop();
  }else{
    bus.loop();
  }
}

function playVoicemail(){

  if(drtyler.isPlaying()){
    drtyler.stop();
  }else{
    drtyler.loop();
  }
}

function draw(){
  // for(mousePressed){
  //   image(img, 0, 0, img.width*2, img.height*2);
  // };
  image(img, 0, 0, img.width*2, img.height*2);
  let val = slider.value();
  for(let i =0; i<videoX.length; i++){
    image(video, videoX[i], videoY[i], val, val);
  }

  // video.style('z-index', '-2');
  let valTwo = sliderTwo.value();
  let valThree = sliderThree.value();
  let valFour = sliderFour.value();
  text(pOne, 10,100,windowWidth,windowHeight);
  fill(20,50,255, valTwo);
  textSize(24);
  text(camData, 10,100,windowWidth,windowHeight);
  fill(255,20,50, valThree);
  textSize(camData);
  textSize(24);
  text(pTwo, 10,100,windowWidth,windowHeight);
  fill(255,255,255, valFour);
  textSize(24);
  if(selfieImageVar >= 0){
    image(allSelfies[selfieImageVar], valTwo*3, valThree*3, val, valFour, 50);
  }
}

function mouseDragged(){

  videoX.push(mouseX);
  videoY.push(mouseY);


}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
