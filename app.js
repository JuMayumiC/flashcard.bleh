function criarCartas(categoria, perguntas, respostas) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHtml = ` 
    <div class="cartao-conteudo">
    <h3>${categoria}</h3>
    <div class = "cartao-pergunta">
    <p>${pergunta}</p>
    </div>
    <div class = "cartao-resposta">
    <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao);

}