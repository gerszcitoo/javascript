class Producto {
    constructor(nombreProd, precioProd) {
        this.nombreProd = nombreProd;
        this.precioProd = precioProd;
    }
}
// Array de productos
let listaProductos = [];

// Función de compra de productos
function comprarProducto(precioTotal, nombreProd, precioProd) {
    //Reinicia variable comprar
    let comprar = "",
        prod;
    while (comprar != "no") {
        let comprando = parseInt(prompt(`Qué producto desea comprar?\n1. Smart TV Samsung Series 7 LED 4K 50" ($80.000)\n2. Notebook Dell Inspiron 3502 ($83.599)\n3. Celular Samsung A51 128Gb ($64.000)\n4. Memoria RAM Fury Beast DDR4 8GB ($7300)\n5. Atrás`));
        switch (comprando) {
            case 1:
                precioTotal = precioTotal + 80000;
                precioProd = 80000;
                nombreProd = `SMART TV SAMSUNG SERIES 7 LED 4K 50"`;
                prod = new Producto(nombreProd, precioProd);
                listaProductos.push(prod);
                break;
            case 2:
                precioTotal = precioTotal + 83599;
                precioProd = 83599;
                nombreProd = "NOTEBOOK DELL INSPIRON 3502";
                prod = new Producto(nombreProd, precioProd);
                listaProductos.push(prod);
                break;
            case 3:
                precioTotal = precioTotal + 64000;
                precioProd = 64000;
                nombreProd = "CELULAR SAMSUNG A51 128GB";
                prod = new Producto(nombreProd, precioProd);
                listaProductos.push(prod);
                break;
            case 4:
                precioTotal = precioTotal + 7300;
                precioProd = 7300;
                nombreProd = "MEMORIA RAM FURY BEAST DDR4 8GB";
                prod = new Producto(nombreProd, precioProd);
                listaProductos.push(prod);
                break;
            case 5:
                comprar = "no";
                break;
            default:
                alert(`Por favor, ingrese una opción válida`);
                break;
        }
    }
    return precioTotal, nombreProd, precioProd;
}

function calcCuota(precioTotal) {
    let ingresarBanco, interes, meses, cuota;
    while (ingresarBanco != "no") {
        let banco = parseInt(prompt("Elija su banco\n1. Macro\n2. Santander\n3. Superville\n4. Atrás"));
        switch (banco) {
            case 1:
                // Asigna el interés y calcula las cuotas
                interes = 27;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precioTotal * (1 + interes / 100) / meses).toFixed(2);
                alert(`Su precio con ${meses} cuotas es de $${cuota}`);
                break;
            case 2:
                interes = 23;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precioTotal * (1 + interes / 100) / meses).toFixed(2);
                alert(`Su precio con ${meses} cuotas es de $${cuota}`);
                break;
            case 3:
                interes = 20;
                meses = parseInt(prompt("Ingrese la cantidad de cuotas que desea"));
                cuota = (precioTotal * (1 + interes / 100) / meses).toFixed(2);
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
    let continuar, menuPrincipal, busquedaUsuario, precioTotal = 0;
    while (continuar != "no") {
        // Menu principal
        menuPrincipal = parseInt(prompt("Qué desea hacer?\n1. Comprar\n2. Ver monto (sin cuotas)\n3. Reiniciar monto\n4. Calcular cuotas\n5. Ver el carrito\n6. Buscar\n7. Salir"));
        switch (menuPrincipal) {
            // Caso 1 - Comprar
            case 1:
                precioTotal = comprarProducto(precioTotal);
                break;
                // Caso 2 - Ver monto
            case 2:
                alert(`El monto es de: $${precioTotal}`);
                break;
                // Caso 3 - Reiniciar monto
            case 3:
                precioTotal = 0;
                alert(`El monto ha sido reiniciado`);
                break;
                // Caso 4 - Ver y calcular cuotas
            case 4:
                calcCuota(precioTotal);
                break;
                // Caso 5 - Ver carrito con productos
            case 5:
                let carrito = [];
                if (listaProductos == "") {
                    alert("El carrito está vacío");
                } else {
                    for (const producto of listaProductos) {
                        carrito.push(producto.nombreProd);
                    }
                    alert(carrito.join("\n"));
                }
                break;
                // Caso 7 - Salir
            case 6:
                busquedaUsuario = prompt("Qué producto desea buscar?");
                busquedaUsuario.toUpperCase();
                let buscar = listaProductos.find(producto => producto.nombreProd == busquedaUsuario);
                if (buscar == null) {
                    alert(`No se encontró ningún producto que coincida con "${busquedaUsuario}"`);
                } else {
                    alert(buscar);
                }
                break;
            case 7:
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