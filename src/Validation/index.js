export function Validation(inputs){
    let validation = {}
if (!inputs.name || !inputs.resumen) {
    validation.data = "Falta el nombre o un resumen de la receta";
}
else if (inputs.score > 100 || inputs.score < 0) {
    validation.score = "La puntuacion no es correcta, debe ser mayor a 0 y menor que 100";
}
return validation;
}