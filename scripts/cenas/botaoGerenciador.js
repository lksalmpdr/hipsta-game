class BotaoGerenciador{
	constructor(texto, posX, posY){
		this.texto = texto;
		this.posX = posX;
		this.posY = posY;
        this.botao = createButton(this.texto);
	}
    

	draw(){
      
      this.botao.addClass('botao-tela-inicial');
		this.botao.mousePressed(()=> this._alteraCena());
		this.botao.position(this.posX, this.posY);
		this.botao.center('horizontal');
        this.botao.addClass('botao-tela-inicial');
        this.botao.mousePressed(()=>{this._alteraCena()})

	}

	_alteraCena(){
		cenaAtual = 'jogo';
        this.botao.remove();
		
	}

}