var altura = 0
var largura = 0
var tam = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if( nivel === 'facil')
	criaMosquitoTempo = 1500
if( nivel === 'normal')
	criaMosquitoTempo = 1000
if( nivel === 'dificil')
	criaMosquitoTempo = 750

function ajustaTamanhoFundoJogo(){

	altura = window.innerHeight
	largura = window.innerWidth

}

ajustaTamanhoFundoJogo()

var cronometro = setInterval(function(){

	tempo-=1

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href='vitoria.html'
	}else
		document.getElementById('cronometro').innerHTML = tempo
	
},1000)

//função que posiciona o mosquito na tela de acordo com tamanho,lado e posição
function posicaoRandomica(){

	//remover o mosquito anterior caso exista
	if(document.getElementById('mosquito')){

		if(vidas > 3){
			window.location.href='fim_de_jogo.html'
		}

		document.getElementById('mosquito').remove()
		document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
		vidas++
	}
	

	var posicaoX = Math.floor(Math.random() * largura)
	var posicaoY = Math.floor(Math.random() * altura)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	var tipo = mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

	//reposicionar img nos limites da tela , para nao sair da tela, DAQUI
	if( tipo === 'mosquito1')
		tam = 50
	else if(tipo ==='mosquito2')
		tam = 100
	else
		tam = 200

	posicaoX = (largura - posicaoX) < tam ? (largura - tam) : posicaoX
	posicaoY = (altura - posicaoY) < tam ? (altura - tam) : posicaoY
	//ATE AQUI

	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position ='absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}

//função que muda o tamanho do mosquito
function tamanhoAleatorio(){
	classe = Math.floor(Math.random() * 3)
	
	switch(classe){

		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'

	}
}

//funçao que inverte o lado do mosquito
function ladoAleatorio(){
	classe = Math.floor(Math.random() * 2)
	
	switch(classe){

		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}