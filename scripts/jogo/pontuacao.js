class Pontuacao{
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textSize(50);
    text(this.pontos, width - 150, 50);
  }
  
  ganha(){
    this.pontos = this.pontos +10;
  }
}
