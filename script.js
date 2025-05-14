// Crear diamantes flotantes
for (let i = 0; i < 25; i++) {
  const d = document.createElement('div');
  d.classList.add('diamante');
  d.style.left = Math.random() * 100 + 'vw';
  d.style.animationDuration = (5 + Math.random() * 10) + 's';
  document.body.appendChild(d);
}

// Mostrar botón y alerta si es app
function mostrarBoton() {
  document.getElementById('abrirBtn').style.display = 'inline-block';

  // Detectar si está dentro de apps como TikTok, Facebook, Instagram
  const agente = navigator.userAgent.toLowerCase();
  if (agente.includes("tiktok") || agente.includes("fb") || agente.includes("instagram")) {
    document.getElementById('alerta').style.display = 'block';
  }
}

// Ir al sitio real
function abrirNavegador() {
  window.location.href = "https://diamantes-pall-free.blogspot.com/";
}
