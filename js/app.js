var btnAlternador = document.querySelector('.js-botao-chaveador');

btnAlternador.onclick = function(){
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');
}