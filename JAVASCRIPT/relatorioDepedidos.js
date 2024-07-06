let orders = JSON.parse(localStorage.getItem('orders')) || [];

const cardsContainer = document.getElementById('cards-container');

const renderOrders = () => {
    cardsContainer.innerHTML = '';
    orders.forEach((order, index) => {
        const card = document.createElement('div');
        card.className = 'order-card';

        card.innerHTML = `
            <h2>Pedido de ${order.customerName}</h2>
            <p>Produto: ${order.product}</p>
            <p>Quantidade: ${order.quantity}</p>
            <p>Cor: ${order.color}</p>
            <p>Tecido: ${order.fabric}</p>
            <p class="order-status">Status: ${order.status}</p>
            <div class="order-card-buttons">
                <button class="iniciar">Iniciar</button>
                <button class="finalizar">Finalizar</button>
            </div>
        `;

        card.addEventListener('click', () => toggleExpand(card));

        const iniciarButton = card.querySelector('.iniciar');
        const finalizarButton = card.querySelector('.finalizar');

        iniciarButton.addEventListener('click', (event) => {
            event.stopPropagation();
            updateStatus(index, 'Em Progresso');
        });

        finalizarButton.addEventListener('click', (event) => {
            event.stopPropagation();
            updateStatus(index, 'Concluído');
        });

        cardsContainer.appendChild(card);
    });
};

const toggleExpand = (card) => {
    const expandedCard = document.querySelector('.expanded');
    if (expandedCard && expandedCard !== card) {
        expandedCard.classList.remove('expanded');
    }
    
    card.classList.toggle('expanded');
};

const updateStatus = (index, status) => {
    orders[index].status = status;
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
    window.dispatchEvent(new Event('storage')); // Trigger storage event to update monitoring screen
};

renderOrders();

// Atualizar a lista de pedidos quando um novo pedido é adicionado
window.addEventListener('storage', () => {
    orders = JSON.parse(localStorage.getItem('orders')) || [];
    renderOrders();
});
