function preload(){
  
  imagemCenario = loadImage('./images/cenario/floresta.png');
  imagemPersonagem = loadImage('./images/personagem/correndo.png');
  imagemInimigo = loadImage('./images/inimigos/gotinha.png');
  imagemInimigoMaior = loadImage('./images/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./images/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('./images/assets/game-over.png');
  imagemTelaInicial = loadImage('./images/assets/telaInicial.png');
  imagemFonteTelaInicial = loadFont('./images/assets/fonteTelaInicial.otf');
  imagemVida = loadImage('./images/assets/coracao.png');
  
  trilhaJogo = loadSound('./sons/trilha_jogo.mp3');
  trilhaPulo = loadSound('./sons/somPulo.mp3');

  cartucho = loadJSON('./cartucho/cartucho.json');
}
