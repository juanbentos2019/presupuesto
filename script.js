const modulos = [
  {
    titulo: "2.1. Gestor de Proyectos",
    horas: 52,
    descripcion: "ABM de proyectos, asociación de cashflows, ventas, listas de precios, fechas clave y parámetros del proyecto.",
    pasos: [
      "Diseñar y crear modelos de base de datos usando Django ORM",
      "Desarrollar formularios específicos para cada modelo",
      "Implementar vistas basadas en clases (CRUD)",
      "Configurar URLs detalladas y seguras en Django",
      "Aplicar validaciones avanzadas de formularios"
    ]
  },
  {
    titulo: "2.2. Listas de Precios y Detalle de Unidades",
    horas: 58,
    descripcion: "ABM de listas de precios por etapa, tipo y moneda, con fines de simulación.",
    pasos: [
      "Crear modelos detallados para listas y tipos de unidades",
      "Generar formularios personalizados y validados",
      "Programar vistas CRUD específicas con lógica compleja",
      "Integrar frontend interactivo con validaciones JavaScript",
      "Implementar lógica de simulación de escenarios económicos"
    ]
  },
  {
    titulo: "2.3. Carga de Históricos",
    horas: 72,
    descripcion: "Carga automática desde archivo contable. Detección de conceptos, omisión de subtotales, limpieza y moneda.",
    pasos: [
      "Leer y parsear archivos Excel complejos con pandas",
      "Desarrollar rutinas para detectar automáticamente conceptos relevantes",
      "Implementar filtrado avanzado para omitir subtotales",
      "Ejecutar procesos de limpieza y normalización de datos",
      "Generar registros masivos optimizados en la base de datos"
    ]
  },
  {
    titulo: "2.4. Proyecciones de Ventas",
    horas: 120,
    descripcion: "Proyección de cobros y ventas, bolsa de saldos pendientes, carga de ventas efectivas.",
    pasos: [
      "Desarrollar algoritmos predictivos avanzados para ventas y cobros",
      "Programar integración robusta con modelos de ventas existentes",
      "Gestionar estados de saldos pendientes y su actualización dinámica",
      "Crear informes automatizados y detallados para toma de decisiones",
      "Implementar dashboards interactivos de seguimiento de ventas"
    ]
  },
  {
    titulo: "2.5. Parámetros Financieros y Conceptos Proyectables",
    horas: 86,
    descripcion: "Gestión de conceptos de costos e ingresos proyectables por distintos métodos.",
    pasos: [
      "Definir modelos flexibles para diversos métodos de proyección",
      "Programar lógica avanzada y automatizada para cálculos financieros",
      "Crear formularios y validaciones robustas para ingresar parámetros financieros",
      "Implementar vistas especializadas para proyecciones dinámicas",
      "Realizar simulaciones y ajustes de escenarios económicos complejos"
    ]
  },
  {
    titulo: "2.6. Índices Económicos",
    horas: 60,
    descripcion: "Carga automática SOAP BCU, scraping de expectativas, interpolación y proyección.",
    pasos: [
      "Integrar con Web Service SOAP oficial del BCU",
      "Implementar técnicas avanzadas de web scraping para obtener expectativas económicas",
      "Programar lógica detallada para interpolación de datos faltantes",
      "Desarrollar rutinas predictivas para proyección de índices económicos",
      "Gestionar automatización diaria con manejo robusto de errores"
    ]
  },
  {
    titulo: "2.7. Motor de Proyección General",
    horas: 74,
    descripcion: "Consolidación de ingresos y egresos, cotización mensual, generación de presupuesto.",
    pasos: [
      "Desarrollar motor robusto de consolidación financiera",
      "Integrar múltiples fuentes de datos para cotización mensual",
      "Programar generación automatizada de presupuestos detallados",
      "Implementar validaciones cruzadas entre ingresos y egresos",
      "Crear reportes financieros detallados y precisos"
    ]
  },
  {
    titulo: "2.8. Cierre Financiero",
    horas: 72,
    descripcion: "Simulación mes a mes con triggers, reglas de financiación, colchón y resultados.",
    pasos: [
      "Definir y programar reglas complejas de negocio financiero",
      "Implementar lógica avanzada para simulaciones mensuales",
      "Gestionar triggers automáticos basados en eventos financieros específicos",
      "Desarrollar colchones financieros y mecanismos de seguridad económica",
      "Generar reportes mensuales detallados de resultados y análisis"
    ]
  },
  {
    titulo: "2.9. Interfaz y Reportes",
    horas: 125,
    descripcion: "Dashboard por proyecto y etapa, gráficos y tablas, exportación a Excel y PDF.",
    pasos: [
      "Diseñar dashboard interactivo con experiencia de usuario optimizada",
      "Programar gráficos avanzados con Chart.js e integrarlos dinámicamente",
      "Generar tablas interactivas y filtrables",
      "Implementar exportación automatizada y detallada a Excel y PDF",
      "Asegurar compatibilidad y responsividad total en dispositivos móviles y escritorio"
    ]
  },
  {
    titulo: "2.10. Módulos Necesarios de la Plataforma",
    horas: 100,
    descripcion: "Login, permisos, admin extendido, auditoría, backups, exportación y logs.",
    pasos: [
      "Configurar sistema seguro de autenticación y gestión de usuarios en Django",
      "Definir y gestionar permisos complejos para distintos niveles de usuarios",
      "Implementar sistema robusto de auditoría de acciones del usuario",
      "Programar backups automáticos y gestión de recuperación de datos",
      "Implementar registro y análisis avanzado de logs de actividad"
    ]
  },
  {
    titulo: "2.11. Puesta en Producción",
    horas: 60,
    descripcion: "Deploy del sistema en servidor.",
    pasos: [
      "Configurar servidor para despliegue seguro y eficiente",
      "Implementar prácticas de integración continua y despliegue continuo (CI/CD)",
      "Monitorear continuamente la aplicación con herramientas avanzadas"
    ]
  },
  {
    titulo: "2.12. Capacitación",
    horas: 10,
    descripcion: "Una semana de capacitación para uso del sistema.",
    pasos: [
      "Preparar material didáctico detallado y comprehensivo",
      "Dictar talleres prácticos e interactivos personalizados",
      "Ofrecer soporte técnico inicial constante y resolutivo"
    ]
  }
];

// Render de los módulos
const container = document.getElementById("modulos");
modulos.forEach((mod) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${mod.titulo}</h3>
    <p>${mod.descripcion}</p>
    <p><strong>Horas estimadas:</strong> ${mod.horas}</p>
  `;
  div.addEventListener("click", () => mostrarModal(mod));
  container.appendChild(div);
});

// Modal
function mostrarModal(mod) {
  document.getElementById("modal-title").textContent = mod.titulo;
  const pasosLista = document.getElementById("modal-steps");
  pasosLista.innerHTML = mod.pasos.map(paso => `<li>${paso}</li>`).join("");
  document.getElementById("modal-overlay").classList.add("active");
}

document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("modal-overlay").classList.remove("active");
});

// Gráfico
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

// Botones de impresión
function imprimirTodo() {
  window.print();
}

function imprimirHitos() {
  const seccion = document.getElementById("seccion-hitos").cloneNode(true);
  const ventana = window.open('', '_blank', 'width=800,height=600');
  ventana.document.write(`
    <html>
      <head>
        <title>Hitos - AutoBudget</title>
        <style>
          body { font-family: 'Segoe UI', sans-serif; padding: 2rem; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { padding: 1rem; border-bottom: 1px solid #ccc; }
          th { background: #003366; color: white; }
          td strong { color: #006400; }
        </style>
      </head>
      <body>
        ${seccion.innerHTML}
        <script>window.onload = function() { window.print(); window.close(); };<\/script>
      </body>
    </html>
  `);
  ventana.document.close();
}
