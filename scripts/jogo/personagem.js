class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY ;
    this.y = this.yInicial;
    this.gravidade = 3;
    this.alturaDoPulo = -50
    this.pulos = 0
    this.velocidadeDoPulo = 0;
    this.invencivel = false;
    this.maximoPulos=2;
  }
  
  pula(){
    if(this.pulos < this.maximoPulos){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }

  }
  
  aplicaGravidade(){
    this.y  = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(()=>{
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo){
    const precisao = .7;
    //noFill();
    //rect(this.x, this.y, this.largura, this.altura, 20);
    //rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
    
    
    if(this.invencivel){
      return false;
    }
    
    return collideRectRect(this.x,this.y
                           ,this.largura * precisao
                           ,this.altura * precisao
                           ,inimigo.x
                           ,inimigo.y
                           ,inimigo.largura * precisao
                           ,inimigo.altura * precisao);
    }
  
}
