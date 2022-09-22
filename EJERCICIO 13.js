let nombre = 'Sergio';
let apellido = "de Luque";
let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

const estudianteLength = estudiante.length;

const inicialNombre = nombre[0];

const finalApellido = apellido[apellido.length - 1];

const estudianteSinEspacios = estudiante.replace(' ', "");

const nombreEnEstudiante = estudiante.includes(nombre);