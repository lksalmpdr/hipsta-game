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
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10, 100);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100)
  const inimigoMaior = new Inimigo(matizInimigoMaior, imagemInimigoMaior, width, 0, 200, 200, 400, 400, 15  , 100);

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
  
  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < -inimigo.largura;

  inimigo.exibe()
  inimigo.move();
  
  if(inimigoVisivel){
    inimigoAtual++;
    if(inimigoAtual > 2){
      inimigoAtual = 0;
    }
    inimigo.velocidade = parseInt(random(10, 30));
  }
  
  if (personagem.estaColidindo(inimigo)) {
    //image(imagemGameOver, width/2 - 200, height/3);
    //noLoop();
    console.log('colisao');
  } 
}
