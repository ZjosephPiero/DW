let carrito = 0;

// BOTONES PEDIR
const botones = document.querySelectorAll(
    ".add-to-cart"
);

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        carrito++;

        actualizarCarrito();

        alert("✅ Producto agregado");

    });

});

// ACTUALIZA NUMERO DEL CARRITO
function actualizarCarrito() {

    const contador = document.querySelector(
        ".cart-count"
    );

    contador.innerText = carrito;

}


// EFECTO SCROLL EN CATEGORIAS

const tabs = document.querySelectorAll(
    ".category-tab"
);

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

    });

});


// EFECTO HOVER TARJETAS

const tarjetas = document.querySelectorAll(
    ".product-card"
);

tarjetas.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


// MENSAJE BIENVENIDA

console.log("🍗 Brosteria Chevis cargada correctamente");

// MODO OSCURO

const darkBtn = document.getElementById(
    "dark-mode-btn"
);

// Cargar modo guardado
if (localStorage.getItem("modo") === "oscuro") {

    document.documentElement.classList.add("dark");

    darkBtn.innerText = "☀️";

}

// Evento botón
darkBtn.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

    // Si está oscuro
    if (document.documentElement.classList.contains("dark")) {

        darkBtn.innerText = "☀️";

        localStorage.setItem("modo", "oscuro");

    } 
    
    // Si está claro
    else {

        darkBtn.innerText = "🌙";

        localStorage.setItem("modo", "claro");

    }

});