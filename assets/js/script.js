// Datos de las recetas
const recetas = {
  spaghetti: {
    nombre: "Spaghetti Clásico",
    imagen: "assets/img/spa-preparacion.png",
    preparacion: 10,
    coccion: 20,
    reposo: 10,
    porcionesBase: 2,
    porciones: 4,
    ingredientes: "Pasta, tomate, albahaca, ajo, queso parmesano"
  },
  ensalada: {
    nombre: "Ensalada César",
    imagen: "assets/img/preparacion-ensalada.png",
    preparacion: 10,
    coccion: 0,
    reposo: 5,
    porcionesBase: 1,
    porciones: 2,
    ingredientes: "Lechuga, pollo, croutons, parmesano, salsa César"
  },
  tiramisu: {
    nombre: "Tiramisú",
    imagen: "assets/img/pre-tiramisu.png",
    preparacion: 20,
    coccion: 0,
    reposo: 240,
    porcionesBase: 3,
    porciones: 6,
    ingredientes: "Queso mascarpone, café, cacao, huevos, bizcochos"
  }
};

// Variables globales
let unidad = "minutos";
let nivelDeDificultad = "fácil";

// Función para calcular tiempo total
function calcularTiempoTotal(preparacion, coccion, reposo) {
  return preparacion + coccion + reposo;
}

// Función para calcular ingredientes por porción
function calcularPorciones(cantidadBase, numeroDePorciones) {
  return cantidadBase * numeroDePorciones;
}

// Mostrar resumen en consola
function mostrarResumenReceta(nombre, tiempo, ingredientes) {
  console.log(`La receta de ${nombre} toma ${tiempo} ${unidad} y usa ${ingredientes}`);
}

// Abrir modal con detalles de la receta
function abrirModalReceta(recetaKey) {
  const receta = recetas[recetaKey];
  const tiempoTotal = calcularTiempoTotal(receta.preparacion, receta.coccion, receta.reposo);
  const totalIngredientes = calcularPorciones(1, receta.porciones);

  mostrarResumenReceta(receta.nombre, tiempoTotal, receta.ingredientes);

  document.getElementById("modalTitulo").textContent = receta.nombre;
  document.getElementById("modalImagen").src = receta.imagen;
  document.getElementById("resumenReceta").textContent =
    `Una deliciosa receta de ${receta.nombre.toLowerCase()} para ${receta.porciones} personas.`;
  document.getElementById("tiempoTotal").textContent = `${tiempoTotal} minutos`;
  document.getElementById("ingredientes").textContent = receta.ingredientes;
  document.getElementById("dificultad").textContent = nivelDeDificultad;

  const modal = new bootstrap.Modal(document.getElementById("modalReceta"));
  modal.show();
}

// Asociar clic a cada tarjeta de receta
document.querySelectorAll(".receta").forEach(card => {
  card.addEventListener("click", () => {
    const recetaKey = card.getAttribute("data-receta");
    abrirModalReceta(recetaKey);
  });
});

// Función con variable local
function pasosReceta() {
  let instrucciones = "1. Preparar ingredientes\n2. Cocinar o montar\n3. Servir";
  console.log(instrucciones);
}
pasosReceta();

// ------------------------------
// Sección de pruebas didácticas
// ------------------------------

// 1. Uso de funciones definidas
console.log("Resultado de calcularTiempoTotal:");
console.log("Tiempo total (10 + 20 + 10):", calcularTiempoTotal(10, 20, 10), unidad);

console.log("Resultado de calcularPorciones:");
console.log("Ingredientes totales (2 base × 4 porciones):", calcularPorciones(2, 4));

// 2. Función con variables locales
function mostrarResumenRecetaDemo() {
  let tiempo = calcularTiempoTotal(15, 10, 5);
  let personas = 3;
  console.log(`La receta toma ${tiempo} ${unidad} y rinde para ${personas} personas.`);
}
mostrarResumenRecetaDemo();

// 3. Alcance de variables locales
function pasosRecetaDemo() {
  let instrucciones = "1. Cortar\n2. Mezclar\n3. Servir";
  console.log("Instrucciones dentro de la función:", instrucciones);
}
pasosRecetaDemo();
// console.log(instrucciones); // Error: instrucciones is not defined

// 4. Modificación de variable global
console.log("Nivel de dificultad original:", nivelDeDificultad);

function cambiarDificultadDemo() {
  nivelDeDificultad = "difícil";
}
cambiarDificultadDemo();
console.log("Nivel de dificultad modificada:", nivelDeDificultad);

// 5. Función anidada
function gestionarReceta(nombre, tiempo, ingredientes) {
  function imprimirDetalles() {
    console.log(`Para preparar ${nombre} se necesitan ${tiempo} minutos y ${ingredientes.length} ingredientes.`);
  }
  imprimirDetalles();
}
gestionarReceta("Spaghetti", 40, ["pasta", "ajo", "tomate", "albahaca", "queso"]);

// 6. Resumen en tabla
console.table([
  { funcion: "calcularTiempoTotal", resultado: calcularTiempoTotal(5, 10, 15) + " minutos" },
  { funcion: "calcularPorciones", resultado: calcularPorciones(1, 5) + " ingredientes" },
  { variable: "unidad", valor: unidad },
  { variable: "nivelDeDificultad", valor: nivelDeDificultad }
]);
