class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    //por algum motivo, a propriedade hieght do p5 não está chegando aqui, por isso o número 835
    this.yInicial = 835 - this.altura - this.variacaoY ;
    this.y = this.yInicial;
    this.gravidade = 3;
    this.alturaDoPulo = -50
    this.pulos = 0
    this.velocidadeDoPulo = 0;
  }
  
  pula(){
    this.velocidadeDoPulo = this.alturaDoPulo;
    this.pulos++;
  }
  
  aplicaGravidade(){
    this.y  = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  estaColidindo(inimigo){
    
    const precisao = .7;
    return collideRectRect(this.x,this.y
                           ,this.largura * precisao
                           ,this.altura * precisao
                           ,inimigo.x
                           ,inimigo.y
                           ,inimigo.largura * precisao
                           ,inimigo.altura * precisao);
    }
  
}
