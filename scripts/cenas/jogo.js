class Jogo{
	constructor(){
		this.indice = 0;
		this.mapa = cartucho.mapa;
	}

	setup(){
		personagem = new Personagem(matrizHipsta, imagemPersonagem, 0, 30,110, 170, 220, 270);
      
		const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 20);
		const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, 52, 200, 100, 75, 200, 150, 10)
		const inimigoMaior = new Inimigo(matizInimigoMaior, imagemInimigoMaior, width, 0, 200, 200, 400, 400, 15);

		inimigos.push(inimigo);
		inimigos.push(inimigoMaior);
		inimigos.push(inimigoVoador);

		cenario = new Cenario(imagemCenario, 3);
		pontuacao = new Pontuacao();
		vida = new Vida(cartucho.configuracoes.vidaMaxima, cartucho.configuracoes.vidaInicial);
	}

	keyPressed(key){
		if(key=== 'ArrowUp'){
			personagem.pula();
			trilhaPulo.play();
		}
	}

	draw(){
		cenario.exibe();
		cenario.move();
		vida.draw();
		pontuacao.exibe();

		personagem.exibe();
		personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
		const inimigo = inimigos[linhaAtual.inimigo];
		const inimigoVisivel = inimigo.x < -inimigo.largura;

		inimigo.velocidade = linhaAtual.velociade;


		inimigo.exibe();
		inimigo.move();

		if(inimigoVisivel){
			this.indice++;
			inimigo.aparece();
			if(this.indice > this.mapa.length -1){
              this.indice = 0;
			}
			
		}
      
		if (personagem.estaColidindo(inimigo)) {
			vida.perdeVida();
			personagem.ficaInvencivel();
			if(vida.vidas ===0){
				image(imagemGameOver, width/2 - 200, height/3);
				noLoop();	
			}
	  }else{
        if(inimigo.x < 0 && inimigo.x > -50){
          pontuacao.ganha()
        } 
      }

	}
}