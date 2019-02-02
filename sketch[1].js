var submit;
var input;
var canvas;

function setup() {
  canvas = createCanvas(windowHeight,windowWidth);
  canvas.position(0,0);
   canvas.style("z-index", " -1");
 	background(50, 200, 140);

  submit = select('#submit');
  input = createInput();
  submit.mousePressed(yooWords);
  input.change(yooWords);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

}

function yooWords(){
	let words = input.value();
  let regex = /\b\w{3}\b/gi;
  for (i = 0; i < words.length; i++){
  		createP(words.replace(regex, "YOO"));

  }
}
