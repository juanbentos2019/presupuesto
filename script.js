const modulos = [
  {
    titulo: "2.1. Gestor de Proyectos",
    horas: 52,
    descripcion: "ABM de proyectos, asociación de cashflows, ventas, listas de precios, fechas clave y parámetros del proyecto.",
  },
  {
    titulo: "2.2. Listas de Precios y Detalle de Unidades",
    horas: 58,
    descripcion: "ABM de listas de precios por etapa, tipo y moneda, con fines de simulación.",
  },
  {
    titulo: "2.3. Carga de Históricos",
    horas: 72,
    descripcion: "Carga automática desde archivo contable. Detección de conceptos, omisión de subtotales, limpieza, y moneda.",
  },
  {
    titulo: "2.4. Proyecciones de Ventas",
    horas: 120,
    descripcion: "Proyección de cobros y ventas, bolsa de saldos pendientes, carga de ventas efectivas.",
  },
  {
    titulo: "2.5. Parámetros Financieros y Conceptos Proyectables",
    horas: 86,
    descripcion: "Gestión de conceptos de costos e ingresos proyectables por distintos métodos.",
  },
  {
    titulo: "2.6. Índices Económicos",
    horas: 60,
    descripcion: "Carga automática SOAP BCU, scraping de expectativas, interpolación y proyección.",
  },
  {
    titulo: "2.7. Motor de Proyección General",
    horas: 74,
    descripcion: "Consolidación de ingresos y egresos, cotización mensual, generación de presupuesto.",
  },
  {
    titulo: "2.8. Cierre Financiero",
    horas: 72,
    descripcion: "Simulación mes a mes con triggers, reglas de financiación, colchón y resultados.",
  },
  {
    titulo: "2.9. Interfaz y Reportes",
    horas: 125,
    descripcion: "Dashboard por proyecto y etapa, gráficos y tablas, exportación a Excel y PDF.",
  },
  {
    titulo: "2.10. Módulos Necesarios de la Plataforma",
    horas: 90,
    descripcion: "Login, permisos, admin extendido, auditoría, backups, exportación y logs.",
  },
  { titulo: "2.11. Puesta en Producción", horas: 40, descripcion: "Deploy del sistema en servidor." },
  { titulo: "2.12. Capacitación", horas: 40, descripcion: "Una semana de capacitación para uso del sistema." },
];

const container = document.getElementById("modulos");
modulos.forEach(mod => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${mod.titulo}</h3>
    <p>${mod.descripcion}</p>
    <p><strong>Horas estimadas:</strong> ${mod.horas}</p>
  `;
  container.appendChild(div);
});

new Chart(document.getElementById("graficoHoras"), {
  type: "bar",
  data: {
    labels: modulos.map(m => m.titulo),
    datasets: [{
      label: "Horas por módulo",
      data: modulos.map(m => m.horas),
      backgroundColor: 'rgba(0,102,204,0.6)',
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: { beginAtZero: true }
    }
  }
});
