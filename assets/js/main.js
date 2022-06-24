let continuar, random, numero;
while (continuar != "no") {
    do {
        random = parseInt(Math.random() * 10);
        numero = prompt("¿En qué número entre el 0 y el 10 estoy pensando?");
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido");
        }
    } while (isNaN(numero));

    if (numero != random) {
        alert(`Casi! Estaba pensando en el ${random}`);
    } else {
        alert("Tremendo, adivinaste!");
    }
    continuar = prompt(`Desea continuar? (Para salir escriba "no")`);
}