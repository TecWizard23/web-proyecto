// Verificar el estado de inicio de sesión al cargar la página
window.addEventListener("DOMContentLoaded", function () {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "index.html"; // Redirigir al usuario a la página de inicio de sesión
  }
});

// Manejar el envío del formulario de inicio de sesión
document
  .getElementById("index-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "usuario" && password === "12345") {
      alert("Inicio de sesión exitoso");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "indexp.html"; // Redirigir al usuario a la página restringida
    } else {
      alert("Credenciales inválidas. Por favor, intenta de nuevo.");
    }
  });
