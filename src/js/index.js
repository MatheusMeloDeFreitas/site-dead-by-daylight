/* 
alert = apaerece uma mesnagem de alerta
console.log = aparece o script do html no navegador
.getElementById pega o elemnto com o nome do id
querySelectorAll = metodo que seleciona todos os elementos em que a variavel dentro do parenteses pede
ForEach = para cada um deles
classList = Lista de Classe que o elemento tem
const exemplo declara uma variavel constante 

() => {} arrow funciton, funçao de seta
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior:'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    });
})


