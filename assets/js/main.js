let continuar, random, numero, dificultad;
while (continuar != "no") {
    do {
        random = parseInt(Math.random() * 10);
        numero = prompt("¿En qué número entre el 0 y el 10 estoy pensando?");
        if (isNaN(numero) || numero == "" || numero == null) {
            alert("Por favor, ingrese un número válido");
        }
    } while (isNaN(numero) || numero == "" || numero == null);

    if (numero != random) {
        alert(`Casi! Elegiste ${numero} y estaba pensando en el ${random}`);
    } else {
        alert("Tremendo, adivinaste!");
    }
    continuar = prompt(`Desea continuar? (Para salir escriba "no")`);
}