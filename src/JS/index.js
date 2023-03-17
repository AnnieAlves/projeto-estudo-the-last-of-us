const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')


botoesCarrosel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    
    DesativarBotaoSelecionado();

    botao.classList.add('selecionado');

    DesativarImagemDeFundo();

    imagens[indice].classList.add('ativa');

  })
})

function DesativarImagemDeFundo() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function DesativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
