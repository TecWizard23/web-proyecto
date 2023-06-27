// Obtiene los datos del carrito del almacenamiento local
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Función para mostrar los elementos del carrito
function showCartItems() {
  var cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  var cartTotal = 0;

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Valor: $${item.value}</p>
      </div>
    `;

    cartContainer.appendChild(cartItem);
    cartTotal += item.value;
  }

  // Actualiza el conteo y el total del carrito en el encabezado
  document.getElementById('cart-count').textContent = cartItems.length;
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Mostrar los elementos del carrito al cargar la página
showCartItems();
