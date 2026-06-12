// Interação 1: Mostrar alerta simples ao clicar nos botões do menu
function mostrarAlerta(mensagem) {
    alert(mensagem);
}

// Interação 2: Revelar o texto oculto no Banner ao clicar no botão central
const botaoSemear = document.getElementById('btn-interativo');
const mensagemSemente = document.getElementById('mensagem-semente');

botaoSemear.addEventListener('click', function() {
    mensagemSemente.classList.toggle('escondido');
});

// Interação 3: Destacar e mudar a cor dos cards de conteúdo ao clicar neles
function destacarCard(elemento) {
    elemento.classList.toggle('card-destacado');
}

// Interação 4: Somar cliques no botão de apoio do rodapé (Contador)
let cliques = 0;
function mudarContador() {
    cliques = cliques + 1;
    document.getElementById('contador-cliques').innerText = cliques;
}
