export function Validation(inputs){
    let validation = {}
if (!inputs.name) {
    validation.name = "Falta el nombre de la receta";
}
if(!inputs.resumen){
    validation.resumen = "Falta el resumen de la receta";
}
if (inputs.score > 100 || inputs.score < 0) {
    validation.score = "La puntuacion no es correcta, debe ser mayor a 0 y menor que 100";
}
return validation;
}