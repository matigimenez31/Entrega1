const productos = {
    Procesador: 40000,
    Ram: 36540,
    Motherboard: 25000,
    PlacaDeVideo: 120000,
    Fuente: 16400,
    DiscoDuro: 7900,
    DiscoSolido: 9300,
    Gabinete: 23500
};

let preciosProductos = [];

let respuesta = confirm(`¿Desea hacer alguna compra?`);
if (respuesta) {
    let preciosProductos = [];
    for (let producto in productos) {
        respuesta = confirm(`¿Desea comprar ${producto}?`);
        if (respuesta) {
            preciosProductos.push(productos[producto]);
        }
    }
    if (preciosProductos.length === 0) {
        alert(`Muchas gracias, vuelva pronto!`);
        } else {
            let costoTotal = preciosProductos.reduce((a, b) => a + b, 0);
        alert(`El costo total de sus productos es $${costoTotal.toFixed(2)}`);
    }
} else {
    alert(`Muchas gracias, vuelva pronto!`);
}