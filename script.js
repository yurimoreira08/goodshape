//js dos planos
const botao = document.querySelector('.conheca');
const divConteudo = document.querySelector('.conteudo');

botao.addEventListener('click', () => {
    divConteudo.classList.toggle('oculta');
})

const botao1 = document.querySelector('.conheca1');
const divConteudo1 = document.querySelector('.conteudo1');

botao1.addEventListener('click', () => {
    divConteudo1.classList.toggle('oculta1');
})

const botao2 = document.querySelector('.conheca2');
const divConteudo2 = document.querySelector('.conteudo2');

botao2.addEventListener('click', () => {
    divConteudo2.classList.toggle('oculta2');
})

//alert tela das chamadas
function confirmCall() {
    alert("Consulta agendada!")
}