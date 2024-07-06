document.addEventListener('DOMContentLoaded', function () {
    // Função para carregar e exibir a lista de funcionários cadastrados ao carregar a página
    function loadEmployeeList() {
        let employeeList = document.getElementById('employee-list');
        employeeList.innerHTML = ''; // Limpa a lista antes de recarregar
        for (let i = 0; i < localStorage.length; i++) {
            let username = localStorage.key(i);
            let userData = JSON.parse(localStorage.getItem(username));
            if (userData) {
                let card = document.createElement('div');
                card.className = `card ${userData.admin ? 'admin' : 'employee'}`;

                let nameElement = document.createElement('div');
                nameElement.className = 'title';
                nameElement.textContent = userData.name;
                card.appendChild(nameElement);

                let emailElement = document.createElement('div');
                emailElement.className = 'email';
                emailElement.textContent = userData.email;
                card.appendChild(emailElement);

                let roleElement = document.createElement('div');
                roleElement.className = 'role';
                roleElement.textContent = userData.admin ? 'Administrador' : 'Funcionário';
                card.appendChild(roleElement);

                employeeList.appendChild(card);
            }
        }
    }

    // Função para limpar os funcionários cadastrados
    function clearEmployeeList() {
        localStorage.clear();
        loadEmployeeList(); // Atualiza a lista na página
    }

    // Adiciona um evento de clique ao botão de limpar
    document.getElementById('clear-button').addEventListener('click', function () {
        if (confirm('Tem certeza que deseja limpar todos os funcionários cadastrados?')) {
            clearEmployeeList();
        }
    });

    // Adiciona um evento de clique ao botão de voltar
    document.getElementById('back-button').addEventListener('click', function () {
        window.history.back();
    });

    // Carrega a lista de funcionários cadastrados quando a página é carregada
    loadEmployeeList();
});