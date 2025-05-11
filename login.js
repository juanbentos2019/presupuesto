document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío real del formulario

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (username === 'user' && password === 'Aut0Budget2025!') {
    // ✅ Login exitoso
    window.location.href = 'main.html';
  } else {
    // ❌ Error de login
    errorMsg.textContent = 'Usuario o contraseña incorrectos.';
  }
});
