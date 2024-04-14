// botao de selecionar a plataforma
const btnPlataformas = document.querySelector('.cartao__btn-plataforma');

// conteúdo a ser mostrado para o usuário (plataformas)
const elementoPlataformas = document.querySelector('.btn-plataforma__plataformas');

// pegar o clique do usuário no botão de selecionar plataformas
btnPlataformas.addEventListener('click', () => {
    //verificando se o botão de selecionar plataforma já está clicado, se sim, remover a classe 'ativo', se não, adicionar a classe, usando if e else e o toggle

    // const btnAtivo = elementoPlataformas.classList.contains('ativo');
    // if(btnAtivo) {
    //     elementoPlataformas.classList.remove('ativo')
    // }
    // else {
    //     elementoPlataformas.classList.add('ativo')
    // }

    elementoPlataformas.classList.toggle('ativo');
})