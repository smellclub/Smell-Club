document.addEventListener("DOMContentLoaded", () => {
    const perfumesContainer = document.getElementById("perfumes-container");
    const decantsContainer = document.getElementById("decants-container");

    function cargarProductos() {
        perfumesContainer.innerHTML = "";
        decantsContainer.innerHTML = "";

        productos.forEach(prod => {
            let infoPrecioHTML = "";

            // Adaptamos la visualización según si es frasco completo o decant
            if (prod.tipo === "completo") {
                infoPrecioHTML = `<p class="product-price">$${prod.precio.toLocaleString('es-UY')}</p>`;
            } else if (prod.tipo === "decant") {
                infoPrecioHTML = `
                    <div class="decant-prices">
                        <span><strong>5ml:</strong> $${prod.precio5ml}</span>
                        <span><strong>10ml:</strong> $${prod.precio10ml}</span>
                    </div>
                `;
            }

            const tarjetaHTML = `
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${prod.imagen}" alt="${prod.nombre}" class="product-image" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500';">
                    </div>
                    <div class="product-info">
                        <span class="product-brand">${prod.marca}</span>
                        <h3 class="product-title">${prod.nombre}</h3>
                        ${infoPrecioHTML}
                        <a href="${prod.linkWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn-buy">
                            <i class="fa-brands fa-whatsapp"></i> Consultar WhatsApp
                        </a>
                    </div>
                </div>
            `;

            if (prod.tipo === "completo") {
                perfumesContainer.innerHTML += tarjetaHTML;
            } else if (prod.tipo === "decant") {
                decantsContainer.innerHTML += tarjetaHTML;
            }
        });
    }

    cargarProductos();
});
