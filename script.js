// Crear diamantes flotantes
for (let i = 0; i < 25; i++) {
  const d = document.createElement('div');
  d.classList.add('diamante');
  d.style.left = Math.random() * 100 + 'vw';
  d.style.animationDuration = (5 + Math.random() * 10) + 's';
  document.body.appendChild(d);
}

// Mostrar botón
function mostrarBoton() {
  document.getElementById('abrirBtn').style.display = 'inline-block';
}

// Redireccionar a navegador
function abrirNavegador() {
  window.location.href = "https://diamantes-pall-free.blogspot.com/"; // <- CAMBIA por tu URL real
}
