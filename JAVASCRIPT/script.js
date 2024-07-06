const form = document.getElementById('product-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productFabric = document.getElementById('product-fabric').value;
    const productColor = document.getElementById('product-color').value;
    const productSize = document.getElementById('product-size').value;
    const productDescription = document.getElementById('product-description').value;

    // Cria um objeto para o novo produto
    const novoProduto = {
        fabric: productFabric,
        color: productColor,
        size: productSize,
        description: productDescription
    };

    // Recupera a lista de produtos do localStorage ou inicializa uma nova lista vazia
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adiciona o novo produto à lista de produtos
    produtos.push(novoProduto);

    // Salva a lista atualizada de produtos de volta no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Limpa o formulário após o cadastro
    form.reset();
});

// Função para carregar e atualizar a tabela de produtos na página de dados do produto
function atualizarTabelaProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const tabelaBody = document.querySelector('#tabela-produtos tbody');

    // Limpa a tabela antes de atualizar
    tabelaBody.innerHTML = '';

    // Constrói as linhas da tabela com os produtos cadastrados
    produtos.forEach((produto, index) => {
        const row = tabelaBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${produto.fabric}</td>
            <td>${produto.color}</td>
            <td>${produto.size}</td>
            <td>${produto.description}</td>
           
        `;
    });
}

// Chama a função para atualizar a tabela assim que a página for carregada
document.addEventListener('DOMContentLoaded', atualizarTabelaProdutos);
