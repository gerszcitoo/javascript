let continuar, random, numero, dificultad;
// -------While principal------
while (continuar != "no") {
    dificultad = prompt(`Elija la dificultad:\n1.Normal\n2.Difícil\n3.Imposible`);
    // -------Menu dificultad-----
    switch (dificultad) {
        // --------Caso 1--------
        case "1":
            do {
                random = parseInt(Math.random() * 10);
                numero = prompt("¿En qué número entre el 0 y el 10 estoy pensando?");
                // ------Valida el número ingresado------
                if (isNaN(numero) || numero == "" || numero == null) {
                    alert("Por favor, ingrese un número válido");
                }
            } while (isNaN(numero) || numero == "" || numero == null);
            // -------Resultados-------
            if (numero != random) {
                alert(`Casi! Elegiste ${numero} y estaba pensando en el ${random}`);
            } else {
                alert("Tremendo, adivinaste!");
            }
            continuar = prompt(`Desea continuar? (Para salir escriba "no")`);
            break;
            // --------Caso 2--------
        case "2":
            do {
                random = parseInt(Math.random() * 100);
                numero = prompt("¿En qué número entre el 0 y el 100 estoy pensando?");
                // ------Valida el número ingresado------
                if (isNaN(numero) || numero == "" || numero == null) {
                    alert("Por favor, ingrese un número válido");
                }
            } while (isNaN(numero) || numero == "" || numero == null);
            // -------Resultados-------
            if (numero != random) {
                alert(`Casi! Elegiste ${numero} y estaba pensando en el ${random}`);
            } else {
                alert("Buena! Adivinaste, practicás la telekinesis?");
            }
            continuar = prompt(`Desea continuar? (Para salir escriba "no")`);
            break;
            // --------Caso 3--------
        case "3":
            do {
                random = parseInt(Math.random() * 1000);
                numero = prompt("¿En qué número entre el 0 y el 1000 estoy pensando?");
                // ------Valida el número ingresado------
                if (isNaN(numero) || numero == "" || numero == null) {
                    alert("Por favor, ingrese un número válido");
                }
            } while (isNaN(numero) || numero == "" || numero == null);
            // -------Resultados-------
            if (numero != random) {
                alert(`Casi! Elegiste ${numero} y estaba pensando en el ${random}`);
            } else {
                alert("Adivinaste, la verdad no entiendo cómo tuviste tanta suerte");
            }
            continuar = prompt(`Desea continuar? (Para salir escriba "no")`);
            break;
            // --------Caso Default--------
        default:
            alert("Por favor, ingrese una dificultad válida");
            break;
    }
}