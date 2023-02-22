var canvas;
let image1;
let graphic;///créer un graphique(différents calques)

function setup() { 
  canvas=createCanvas(windowWidth, windowHeight * 2.5 );
  canvas.position(0,0);
  canvas.style('z-index', '-0');// changer de plan(arrière plan/avant plan)en dépendant de z
 image1=loadImage("Logo transparent 2.png")
 graphic = createGraphics(width, height); //taille du calque


}

function draw() {
clear();
push();//déput des effets graphiques(fill/stroke)
 



  pop( );//fin des effets graphiques
  image(image1,mouseX-50,mouseY-50,50,50);
/////////////////////////////////conditions et répétitions////////////////////////////
if(mouseIsPressed){
  for(let i=0; i<1;i++) {
    graphic.circle(mouseX,mouseY, 5,5)
  }
}
image(graphic,0,0); //affiche le graphique
}
