document.addEventListener("DOMContentLoaded", () => {
    const perfumesContainer = document.getElementById("perfumes-container");
    const decantsContainer = document.getElementById("decants-container");

    // Función para renderizar los productos en la web
    function cargarProductos() {
        // Limpiamos los contenedores por si acaso
        perfumesContainer.innerHTML = "";
        decantsContainer.innerHTML = "";

        productos.forEach(prod => {
            // Creamos la estructura HTML de la tarjeta premium
            const tarjetaHTML = `
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${prod.imagen}" alt="${prod.nombre}" class="product-image">
                    </div>
                    <div class="product-info">
                        <span class="product-brand">${prod.marca}</span>
                        <h3 class="product-title">${prod.nombre}</h3>
                        <p class="product-price">$${prod.precio.toLocaleString('es-UY')}</p>
                        <a href="${prod.linkWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn-buy">
                            <i class="fa-brands fa-whatsapp"></i> Solicitar por WhatsApp
                        </a>
                    </div>
                </div>
            `;

            // Dependiendo del tipo, lo mandamos a su sección correspondiente
            if (prod.tipo === "completo") {
                perfumesContainer.innerHTML += tarjetaHTML;
            } else if (prod.tipo === "decant") {
                decantsContainer.innerHTML += tarjetaHTML;
            }
        });
    }

    // Ejecutar la función para cargar los perfumes en pantalla
    cargarProductos();
});
