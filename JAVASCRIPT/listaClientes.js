// Função para carregar e exibir os clientes na card-container
function carregarClientes() {
    // Obter o array de clientes do localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Obter a referência ao container dos cartões
    const container = document.getElementById('employee-list');

    // Limpar qualquer conteúdo existente no container
    container.innerHTML = '';

    // Iterar sobre o array de clientes e criar cartões
    clientes.forEach(cliente => {
        const card = document.createElement('div');
        card.className = 'card';

        const nome = document.createElement('div');
        nome.className = 'title';
        nome.textContent = cliente.nome;
        card.appendChild(nome);

        const email = document.createElement('div');
        email.className = 'email';
        email.textContent = `Email: ${cliente.email}`;
        card.appendChild(email);

        const contato = document.createElement('div');
        contato.className = 'contact';
        contato.textContent = `Contato: ${cliente.contato}`;
        card.appendChild(contato);

        // Adicionar o cartão ao container
        container.appendChild(card);
    });
}

// Função para limpar os clientes do localStorage
function limparClientes() {
    // Solicitar confirmação ao usuário
    const confirmar = confirm('Tem certeza que deseja apagar todos os clientes?');

    // Se o usuário confirmar, limpar os clientes
    if (confirmar) {
        localStorage.removeItem('clientes');
        carregarClientes(); // Recarregar a lista para atualizar a exibição
    }
}

// Chamar a função para carregar os clientes quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarClientes);

// Adicionar um event listener ao botão de limpar
document.getElementById('clear-button2').addEventListener('click', limparClientes);
