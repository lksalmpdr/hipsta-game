function setup() {
  createCanvas(windowWidth, windowHeight);
  //trilhaJogo.loop();
  frameRate(40);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial,
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', width /2, height/2);
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
