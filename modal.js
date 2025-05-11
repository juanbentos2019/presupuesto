const pasosTecnicos = {
  "2.1. Gestor de Proyectos": [
    "Crear modelo Project con campos clave: nombre, fechas, etapas.",
    "Asociar Project a cashflows, listas de precios, parámetros financieros.",
    "Implementar vistas CRUD para Project usando Django Class-Based Views.",
    "Agregar validaciones de fechas y lógica de etapas activas.",
    "Diseñar interfaz para visualizar y editar parámetros generales del proyecto."
  ],
  "2.2. Listas de Precios y Detalle de Unidades": [
    "Definir modelo ListaPrecio con etapa, tipo de unidad, precio base, moneda y vigencia.",
    "Relacionar ListaPrecio con Project mediante ForeignKey.",
    "Desarrollar formulario intuitivo para alta y edición de precios por unidad.",
    "Aplicar lógica para validar solapamiento de fechas por etapa.",
    "Permitir vista por etapa con tabla dinámica de precios por unidad."
  ],
  "2.3. Carga de Históricos": [
    "Habilitar subida de archivo contable 'Monthly Cash Flow' vía formulario.",
    "Leer hoja desde Excel usando pandas/openpyxl.",
    "Detectar automáticamente fila de encabezados y columnas con conceptos.",
    "Filtrar filas vacías, subtotales y acumulados.",
    "Detectar moneda por concepto (USD, UYU) y normalizar datos.",
    "Guardar registros en base de datos con sus correspondientes mes, concepto y monto.",
    "Ofrecer vista previa antes de guardar para verificación del usuario."
  ],
  "2.4. Proyecciones de Ventas": [
    "Importar archivo de ventas realizadas y relacionarlas con el proyecto.",
    "Calcular saldo pendiente por unidad vendida.",
    "Definir cantidad de períodos futuros para distribuir cobros pendientes.",
    "Detectar final de etapa y ajustar proyección según ese hito.",
    "Modelar unidades futuras por planificación y asignar cadencia.",
    "Visualizar por etapa: unidades vendidas, cobradas y proyectadas."
  ],
  "2.5. Parámetros Financieros y Conceptos Proyectables": [
    "Crear modelo ConceptoFinanciero con categorías (Hard, Soft, Marketing, etc.).",
    "Desarrollar selector de método de proyección: fijo, porcentaje, índice, avance de obra.",
    "Configurar tabla editable para ingresar montos por mes según método seleccionado.",
    "Asociar cada concepto a un proyecto de forma única.",
    "Validar que cada combinación concepto-mes sea única por proyecto.",
    "Permitir ajustes manuales o aplicación de fórmula automática según configuración."
  ],
  "2.6. Índices Económicos": [
    "Integrar servicio SOAP del BCU para obtener valores del dólar, UI, IPC.",
    "Incorporar scraper para PDFs de Expectativas del BCU (dólar esperado, inflación, etc.).",
    "Guardar valores históricos y proyectados con estado (proyectado/histórico).",
    "Mostrar tabla editable con posibilidad de actualizar valores manualmente.",
    "Interpolar valores faltantes para mantener coherencia en proyección mensual."
  ],
  "2.7. Motor de Proyección General": [
    "Agrupar todos los ingresos (ventas, cobros, otros) y egresos (costos, fees, impuestos).",
    "Aplicar cotización mensual para conversión de UYU a USD.",
    "Transformar conceptos individuales en líneas presupuestales acumulativas.",
    "Generar automáticamente hoja Presupuesto UYU.",
    "Duplicar lógica para hoja Presupuesto USD con cotización aplicada.",
    "Permitir exportación a Excel y PDF desde interfaz."
  ],
  "2.8. Cierre Financiero": [
    "Definir triggers por % de avance en ventas y % de avance de obra.",
    "Aplicar reglas financieras: inversión propia → préstamo → devolución.",
    "Configurar colchón financiero mensual (ejemplo: USD 20.000).",
    "Calcular mes a mes necesidad de fondos, saldos, ingresos, préstamos, dividendos.",
    "Almacenar resultados mensuales en base de datos por moneda y etapa.",
    "Visualizar gráfico de caja vs necesidad de fondos para decisión estratégica."
  ],
  "2.9. Interfaz y Reportes": [
    "Construir dashboard por proyecto con tarjetas resumen (totales por rubro).",
    "Agregar gráficas interactivas (ingresos vs egresos, por etapa, por mes).",
    "Permitir filtrado dinámico por etapa, moneda, concepto, período.",
    "Ofrecer vista detallada exportable a Excel o PDF.",
    "Agregar comparativa proyectado vs ejecutado si existe data histórica."
  ],
  "2.10. Módulos Necesarios de la Plataforma": [
    "Habilitar login de usuarios con autenticación estándar de Django.",
    "Definir grupos de permisos: admin, operador, lectura.",
    "Extender el panel admin_site.py con botones y secciones personalizadas.",
    "Integrar sistema de auditoría: creación, edición, eliminación de datos críticos.",
    "Guardar logs por usuario con marca temporal de acciones relevantes.",
    "Configurar backup automático de base de datos por proyecto y por fecha.",
    "Agregar exportación completa del proyecto (JSON o Excel estructurado)."
  ],
  "2.11. Puesta en Producción": [
    "Instalar servidor con entorno virtual Python configurado.",
    "Configurar PostgreSQL y credenciales seguras en settings.",
    "Realizar migraciones de modelos y pruebas de integración.",
    "Subir archivos estáticos, media y documentación.",
    "Configurar servidor web (Nginx, Gunicorn o Apache).",
    "Asegurar el sitio con certificado SSL y acceso por dominio oficial."
  ],
  "2.12. Capacitación": [
    "Definir cronograma de capacitación de una semana post-despliegue.",
    "Preparar manual de uso y navegación del sistema.",
    "Realizar sesiones prácticas por módulo: carga de datos, generación de reportes, cierre financiero.",
    "Resolver dudas técnicas y de flujo lógico."
    
  ]
};

// 🎯 Función para abrir el modal
function abrirModal(tituloModulo) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalSteps = document.getElementById("modalSteps");

  modalTitle.textContent = `Pasos técnicos - ${tituloModulo}`;
  modalSteps.innerHTML = "";

  const pasos = pasosTecnicos[tituloModulo] || ["Este módulo no tiene pasos documentados aún."];

  pasos.forEach(paso => {
    const li = document.createElement("li");
    li.textContent = paso;
    modalSteps.appendChild(li);
  });

  modal.classList.add("open");
}

// ❌ Cerrar modal
document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("open");
});

window.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").classList.remove("open");
  }
});

window.abrirModal = abrirModal;
