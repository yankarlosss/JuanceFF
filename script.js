// Crear diamantes flotantes
for (let i = 0; i < 25; i++) {
  const d = document.createElement('div');
  d.classList.add('diamante');
  d.style.left = Math.random() * 100 + 'vw';
  d.style.animationDuration = (5 + Math.random() * 10) + 's';
  document.body.appendChild(d);
}

// Mostrar botón y mensaje de alerta
function mostrarBoton() {
  document.getElementById('abrirBtn').style.display = 'inline-block';

  // Detectar si está en TikTok, Facebook o Instagram
  const agente = navigator.userAgent.toLowerCase();
  if (agente.includes("tiktok") || agente.includes("fb") || agente.includes("instagram")) {
    document.getElementById('alerta').style.display = 'block';
  }
}

// Redireccionar a navegador externo
function abrirNavegador() {
  window.location.href = "https://tusitio.com"; // Reemplaza por tu URL real
}
