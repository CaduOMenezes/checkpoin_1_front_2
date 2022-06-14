const btn = document.querySelector('button');
const formulario = document.querySelector('form');
const prod = document.querySelector('.produtos');
const produtosCriados = [];



formulario.addEventListener('submit', function(event) {
    
    const produto = {
        nome: document.querySelector('#titulo').value,
        preco: document.querySelector('#price').value,
        imagem: document.querySelector('#imagem').value,
        descricao: document.querySelector('#descricao').value,
    }
    adicionarProduto(produto);
    event.preventDefault();
})

function adicionarProduto(produto) {
    
    produtosCriados.push(produto)
    prod.innerHTML = "";

    produtosCriados.forEach(function(card) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${card.nome}</h3>
            <p>R$${card.preco}</p>
            <img src="${card.imagem}" alt="">
            <p>${card.descricao}</p>
        `;
        div.setAttribute('class', 'card');
        prod.appendChild(div);
    });

}