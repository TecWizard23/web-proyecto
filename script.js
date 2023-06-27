// Función para agregar un artículo al carrito de compras
function addToCart(item) {
    var cartCount = document.getElementById("cart-count");
    var cartTotal = document.getElementById("cart-total");
  
    // Incrementar la cantidad de artículos en el carrito
    var count = parseInt(cartCount.textContent) + 1;
    cartCount.textContent = count;
  
    // Calcular el nuevo total del carrito
    var total = parseFloat(cartTotal.textContent.substring(1)) + 10; // Precio del artículo
    cartTotal.textContent = total.toFixed(2);
  
    // Crear un elemento de lista para el artículo agregado
    var cartItems = document.getElementById("cart-items");
    var listItem = document.createElement("li");
    listItem.textContent = item;
    cartItems.appendChild(listItem);
  }
  
  // Función para procesar el pago
  function checkout() {
    var cartCount = document.getElementById("cart-count");
    var cartTotal = document.getElementById("cart-total");
    var cartItems = document.getElementById("cart-items");
  
    // Mostrar un mensaje de confirmación
    alert("¡Gracias por tu compra!");
  
    // Restablecer el carrito de compras
    cartCount.textContent = "0";
    cartTotal.textContent = "0.00";
    cartItems.innerHTML = "";
    var cartCount = parseInt(document.getElementById('cart-count').textContent);
  var cartTotal = parseFloat(document.getElementById('cart-total').textContent);

  document.getElementById('cart-count').textContent = cartCount + 1;
  document.getElementById('cart-total').textContent = (cartTotal + itemValue).toFixed(2);

  // Aquí puedes realizar otras operaciones necesarias, como guardar el ítem en el carrito
}
  
  
  