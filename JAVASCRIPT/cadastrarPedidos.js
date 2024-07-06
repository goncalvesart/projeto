
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const color = document.getElementById('color').value; 
    const fabric = document.getElementById('fabric').value;
  
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    const newOrder = {
        customerName,
        customerEmail,
        customerPhone,
        product,
        quantity,
        color, 
        fabric, 
        status: 'Pendente'
    };
  
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
  
    document.getElementById('orderForm').reset();
  });
  