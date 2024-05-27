function trocarDivs(botaoClicado, divEsconder, divMostrar) {
    // Obter os elementos com DOM
    const botao = document.getElementById(botaoClicado);
    const divEscondida = document.getElementById(divEsconder);
    const divVisivel = document.getElementById(divMostrar);
  
    // Adicionar evento de clique ao botão
    botao.addEventListener('click', function() {
      // Esconder a div atual
      divEscondida.style.display = 'none';
  
      // Mostrar a nova div
      divVisivel.style.display = 'block';
    });
  }