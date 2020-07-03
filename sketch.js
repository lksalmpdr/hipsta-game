let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoVoador;
let cenario;
let trilhaJogo;
let trilhaPulo;
let personagem;
let inimigos = [];
let pontuacao;

const matrizInimigo = [
  [0,0], 
  [104,0],
  [208,0],
  [312,0],
  [0,104],
  [104,104],
  [208,104],
  [312,104],
  [0,208],
  [104,208],
  [208,208],
  [312,208],
  [0,312],
  [104,312],
  [208,312],
  [312,312],
  [0,416],
  [104,416],
  [208,416],
  [312,416],
  [0,520],
  [104,520],
  [208,520],
  [312,520],
  [0,624],
  [104,624],
  [208,624],
  [312,624],
  ];

const matizInimigoMaior = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const matrizHipsta = [
      [0,0],
      [220,0],
      [440,0],
      [660,0],
      [0,270],
      [220,270],
      [440,270],
      [660,270],
      [0,540],
      [220,540],
      [440,540],
      [660,540],
      [0,810],
      [220,810],
      [440,810],
      [660,810]
    ];

function preload(){
  
  imagemCenario = loadImage('./images/cenario/floresta.png');
  imagemPersonagem = loadImage('./images/personagem/correndo.png');
  imagemInimigo = loadImage('./images/inimigos/gotinha.png');
  imagemInimigoMaior = loadImage('./images/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./images/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('./images/assets/game-over.png');
  
  trilhaJogo = loadSound('./sons/trilha_jogo.mp3');
  trilhaPulo = loadSound('./sons/somPulo.mp3');
}

function setup() {
  personagem = new Personagem(matrizHipsta, imagemPersonagem, 0, 30,110, 170, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30,52, 52,104,104);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500)
  const inimigoMaior = new Inimigo(matizInimigoMaior, imagemInimigoMaior, width*2, 0, 200, 200, 400, 400 );

  inimigos.push(inimigo);
  inimigos.push(inimigoMaior);
  inimigos.push(inimigoVoador);
  
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 1);
  pontuacao = new Pontuacao();
  trilhaJogo.loop();
  frameRate(40);
}

function keyPressed(){
  if(key=== 'ArrowUp'){
    personagem.pula();
    trilhaPulo.play();
  }
}

function draw() {
  //background(0, 192, 5);
  //circle(windowWidth/2,windowHeight/2,200);
  //circle(mouseX, mouseY, 10);
  //background(cenario, 0, 0, width, height);
  //image(location, xAxis, Yaxis, width, height, spritPosition, spritXPixels, spritYPixels)
  
  cenario.exibe();
  cenario.move();
  
  pontuacao.exibe();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()
    
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3)      
      noLoop()
    }
    
  })
  
}
