class TelaInicial{
	constructor(){}

	draw(){
		this._imagemDeFundo();
		this._texto();
		this._botao();
	}

	_imagemDeFundo(){
		image(imagemTelaInicial, 0, 0, width, height);
		
	}

	_texto(){
        fill(0);
        strokeWeight(2);
        
		textFont(imagemFonteTelaInicial);
		textAlign(CENTER);
		textSize(50);
		text('As aventuras de', width /2, height/3);
		textSize(150)
		text('HIPSTA', width/2, height/5 * 3);
	}

	_botao(){
		botaoGerenciador.posY = height /7 *5;
		botaoGerenciador.draw();
	}
}