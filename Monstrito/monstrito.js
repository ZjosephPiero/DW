// ===================== VARIABLES =====================

// Precio base del monstrito
const PRECIO_BASE = 12.00;

// Cantidad inicial
let cantidadMonstrito = 1;

// Precio bebida especial
let precioOtraBebida = 0;


// ===================== CANTIDAD =====================

function cambiarCantidad(valor) {

    cantidadMonstrito += valor;

    // Evita bajar de 1
    if (cantidadMonstrito < 1) {
        cantidadMonstrito = 1;
    }

    // Actualiza contador
    document.getElementById("cantidad-monstrito").innerText = cantidadMonstrito;

    calcularTotal();
}


// ===================== CALCULAR TOTAL =====================

function calcularTotal() {

    // Total base
    let total = PRECIO_BASE * cantidadMonstrito;

    // Gaseosas seleccionadas
    const gaseosas = document.querySelectorAll('.gaseosa-checkbox');

    gaseosas.forEach(gaseosa => {

        if (gaseosa.checked) {
            total += parseFloat(gaseosa.value);
        }

    });

    // Otras bebidas
    total += precioOtraBebida;

    // Mostrar total
    document.getElementById("total-precio").innerText =
        `S/ ${total.toFixed(2)}`;
}


// ===================== OTRAS BEBIDAS =====================

function selectBebida(card, precio) {

    const tarjetas = document.querySelectorAll('.bebida-card');

    // Deseleccionar si ya estaba activa
    if (card.classList.contains('activa')) {

        card.classList.remove(
            'activa',
            'border-yellow-400',
            'bg-yellow-50'
        );

        precioOtraBebida = 0;

        calcularTotal();

        return;
    }

    // Limpiar todas
    tarjetas.forEach(t => {

        t.classList.remove(
            'activa',
            'border-yellow-400',
            'bg-yellow-50'
        );

    });

    // Activar nueva
    card.classList.add(
        'activa',
        'border-yellow-400',
        'bg-yellow-50'
    );

    precioOtraBebida = precio;

    calcularTotal();
}


// ===================== CARRITO =====================

function agregarAlCarrito() {

    const total =
        document.getElementById("total-precio").innerText;

    alert(`✅ Monstrito agregado al carrito\n${total}`);

}