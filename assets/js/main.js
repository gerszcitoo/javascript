function comprarProducto(precio) {
    //Reinicia variable comprar
    let comprar = "";
    while (comprar != "no") {
        let comprando = parseInt(prompt(`Qué producto desea comprar?\n1. Televisión Philco 50" ($80.000)\n2. Notebook Dell Inspiron 3502 ($83.599)\n3. Celular Samsung A51 128Gb ($64.000)\n4. Atrás`));
        switch (comprando) {
            case 1:
                precio = precio + 80000;
                break;
            case 2:
                precio = precio + 83599;
                break;
            case 3:
                precio = precio + 64000;
                break;
            case 4:
                comprar = "no";
                break;
            default:
                alert(`Por favor, ingrese una opción válida`);
                break;
        }
    }
    return precio;
}

function calcCuota(precio) {
    let ingresarBanco, interes, meses, cuota;
    while (ingresarBanco != "no") {
        let banco = parseInt(prompt("Elija su banco\n1. Macro\n2. Santander\n3. Superville\n4. Atrás"));
        switch (banco) {
            case 1:
                // Asigna el interés y calcula las cuotas
                interes = 27;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precio * (1 + interes / 100) / meses).toFixed(2);
                alert(`Su precio con ${meses} cuotas es de $${cuota}`);
                break;
            case 2:
                interes = 23;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precio * (1 + interes / 100) / meses).toFixed(2);
                alert(`Su precio con ${meses} cuotas es de $${cuota}`);
                break;
            case 3:
                interes = 20;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precio * (1 + interes / 100) / meses).toFixed(2);
                alert(`Su precio con ${meses} cuotas es de $${cuota}`);
                break;
            case 4:
                ingresarBanco = "no";
                break;
            default:
                alert(`Por favor, ingrese una opción válida`);
                break;
        }
    }
}

// Función principal
function ingresarDatos() {
    let continuar, menuPrincipal, precio = 0;
    while (continuar != "no") {
        // Menu principal
        menuPrincipal = parseInt(prompt("Qué desea hacer?\n1. Comprar\n2. Ver monto (sin cuotas)\n3. Reiniciar monto\n4. Calcular cuotas\n5. Salir"));
        switch (menuPrincipal) {
            // Caso 1 - Comprar
            case 1:
                precio = comprarProducto(precio);
                break;
                // Caso 2 - Ver monto
            case 2:
                alert(`El monto es de: $${precio}`);
                break;
                // Caso 3 - Reiniciar monto
            case 3:
                precio = 0;
                alert(`El monto ha sido reiniciado`);
                break;
                // Caso 4 - Ver y calcular cuotas
            case 4:
                precio = calcCuota(precio);
                break;
                // Caso 5 - Salir
            case 5:
                continuar = "no";
                break;
            default:
                alert(`Por favor, ingrese una opción válida`);
                break;
        }
    }

}

// Ejecución principal
ingresarDatos();
document.write(`¡Vuelva pronto!`);