document.addEventListener('DOMContentLoaded', function() {
    // Função para cadastrar um novo usuário
    document.getElementById('register-button').addEventListener('click', function() {
        var newName = document.getElementById('inputName').value.trim();
        var newEmail = document.getElementById('inputEmail4').value.trim();
        var newUsername = document.getElementById('inputUsuario').value.trim();
        var newPassword = document.getElementById('inputPassword4').value;

        // Verifica se todos os campos estão preenchidos
        if (newName === '' || newEmail === '' || newUsername === '' || newPassword === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Verifica se o usuário já está cadastrado
        if (localStorage.getItem(newUsername)) {
            alert('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
            return;
        }

        // Verifica se o email é válido (utilizando uma expressão regular simples)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Cria um objeto para armazenar os dados do usuário
        var isAdmin = document.getElementById('admin-checkbox').checked;
        var userData = {
            name: newName,
            email: newEmail,
            password: newPassword,
            admin: isAdmin
        };

        // Salva os dados no localStorage
        localStorage.setItem(newUsername, JSON.stringify(userData));
        
        // Redireciona para a página inicial correta
        if (isAdmin) {
            window.location.href = '/HTML/producao/telaInicialAdm.html'; // Redireciona para a tela inicial do administrador
        } else {
            window.location.href = '/HTML/producao/telaLoginFunc.html'; // Redireciona para a tela inicial do funcionário
        }
    });

    // Função para logar o usuário
    document.getElementById('login-button').addEventListener('click', function() {
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value;

        // Verifica se os dados estão corretos
        var storedUserData = localStorage.getItem(username);
        if (storedUserData) {
            var userData = JSON.parse(storedUserData);
            if (userData.password === password) {
                // Verifica se o usuário é administrador
                if (userData.admin) {
                    window.location.href = 'telaAdm.html'; // Redireciona para a tela do administrador
                } else {
                    window.location.href = 'telaFuncionario.html'; // Redireciona para a tela do funcionário
                }
            } else {
                alert('Usuário ou senha incorretos!');
            }
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
});
document.getElementById('login-button').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica se os dados estão corretos
    var storedUserData = localStorage.getItem(username);
    if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        if (userData.password === password) {
            // Verifica se o usuário é administrador
            if (userData.admin) {
                window.location.href = 'telaAdm.html';
            } else {
                window.location.href = 'telaFuncionario.html';
            }
        } else {
            alert('Usuário ou senha incorretos!');
        }
    } else {
        alert('Usuário ou senha incorretos!');
    }
});