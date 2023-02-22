var canvas;
let image1;
let graphic;///créer un graphique(différents calques)
let graphicpub;
function setup() { 
  canvas=createCanvas(windowWidth, windowHeight*2.3 );
  canvas.position(0,0);
  canvas.style('z-index', '-0');// changer de plan(arrière plan/avant plan)en dépendant de z
 image1=loadImage("Logo transparent 2.png")
  //noCursor();

//noCursor();
graphicpub = createGraphics(width, height);

graphic = createGraphics(width, height); //taille du calque
graphicpub.fill(255,255,0);
graphicpub.stroke(235,235,0)
graphicpub.rect(543,1420,500,270);


}

function draw() {
clear();
 ////////////////////////////////////publicité/////////////////////////////

graphic.set(mouseX, mouseY, -1)

if(mouseIsPressed){
 graphicpub.erase();
 graphicpub.circle(mouseX,mouseY,40,40);
  }

 // image(image1,mouseX-30,mouseY-30,50,50);

image(graphic,0,0); //affiche le graphique
image(graphicpub,0,0);

//////////////////lien/////////////////////
//var texteAffiché = "MDN";
//var URL = "https://youtu.be/dQw4w9WgXcQ";

//console.log("Cliquer ici pour revenir sur " + texteAffiché.link(URL));
// Cliquer ici pour revenir sur <a href="https://youtu.be/dQw4w9WgXcQ">MDN</a>

}
