// Função para coletar dados do formulário e salvar no localStorage
function cadastrarCliente() {
    // Obter os valores dos campos do formulário
    const nome = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail4').value;
    const contato = document.getElementById('inputUsuario').value;

    // Verificar se o campo de contato contém apenas números
    if (!/^\d+$/.test(contato)) {
        alert('O campo Contato deve conter apenas números.');
        return; // Sair da função se o contato não for válido
    }

    // Criar um objeto cliente com os dados coletados
    const cliente = {
        nome: nome,
        email: email,
        contato: contato
    };

    // Obter o array de clientes do localStorage ou criar um novo array
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Adicionar o objeto cliente ao array de clientes
    clientes.push(cliente);

    // Salvar o array de clientes atualizado no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Limpar os campos do formulário
    document.getElementById('register-form').reset();

    // Exibir uma mensagem de confirmação (opcional)
    alert('Cliente cadastrado com sucesso!');
}

// Adicionar um event listener ao botão de cadastro
document.getElementById('register-button').addEventListener('click', cadastrarCliente);
