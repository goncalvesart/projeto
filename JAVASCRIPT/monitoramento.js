let orders = JSON.parse(localStorage.getItem('orders')) || [];

const monitoringContainer = document.getElementById('monitoring-container');

const renderMonitoringOrders = () => {
    monitoringContainer.innerHTML = '';
    orders.forEach((order) => {
        const card = document.createElement('div');
        card.className = 'order-card';

        card.innerHTML = `
            <h2>Pedido de ${order.customerName}</h2>
            <p>Produto: ${order.product}</p>
            <p>Quantidade: ${order.quantity}</p>
            <p>Cor: ${order.color}</p>
            <p>Tecido: ${order.fabric}</p>
            <p class="order-status">Status: ${order.status}</p>
        `;

        monitoringContainer.appendChild(card);
    });
};

renderMonitoringOrders();

// Atualizar a lista de pedidos quando o status for atualizado
window.addEventListener('storage', () => {
    orders = JSON.parse(localStorage.getItem('orders')) || [];
    renderMonitoringOrders();
});
