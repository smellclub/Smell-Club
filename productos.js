const productos = [
    // ==========================================
    // DECANTS (Solo 5ml y 10ml)
    // ==========================================
    {
        id: "decant-vulcan",
        nombre: "Vulcan Feu",
        marca: "Marca",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "vulcan.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Vulcan%20Feu"
    },
    {
        id: "decant-khamrah",
        nombre: "Khamrah",
        marca: "Lattafa",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "khamrah.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Khamrah"
    },
    {
        id: "decant-club-nuit-bling",
        nombre: "Club de Nuit Bling",
        marca: "Armaf",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "cdn-bling.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Club%20de%20Nuit%20Bling"
    },
    {
        id: "decant-emeer",
        nombre: "Emeer",
        marca: "Lattafa",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "emeer.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Emeer"
    },
    {
        id: "decant-9pm",
        nombre: "9PM Night Out",
        marca: "Afnan",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "9pm.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%209PM%20Night%20Out"
    },
    {
        id: "decant-asad",
        nombre: "Asad",
        marca: "Lattafa",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "asad.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Asad"
    },
    {
        id: "decant-fakhar",
        nombre: "Fakhar",
        marca: "Lattafa",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "fakhar.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Fakhar"
    },
    {
        id: "decant-mandarin",
        nombre: "Mandarin Elixir",
        marca: "Marca",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "mandarin.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Mandarin%20Elixir"
    },
    {
        id: "decant-eclaire",
        nombre: "Éclaire",
        marca: "Lattafa",
        tipo: "decant",
        precio5ml: 250,
        precio10ml: 400,
        imagen: "eclaire.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Éclaire"
    },
    {
        id: "decant-scandal",
        nombre: "Scandal pour Homme",
        marca: "Jean Paul Gaultier",
        tipo: "decant",
        precio5ml: 600,
        precio10ml: 1100,
        imagen: "scandal.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20Scandal%20pour%20Homme"
    },
    {
        id: "decant-jpg-paradise",
        nombre: "JPG Paradise Garden",
        marca: "Jean Paul Gaultier",
        tipo: "decant",
        precio5ml: 600,
        precio10ml: 1100,
        imagen: "jpg-paradise.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20un%20decant%20de%20JPG%20Paradise%20Garden"
    },

    // ==========================================
    // PERFUMES COMPLETOS
    // ==========================================
    {
        id: "perfume-odyssey-candee",
        nombre: "Odyssey Candee",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-candee.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Candee"
    },
    {
        id: "perfume-odyssey-mandarin",
        nombre: "Odyssey Mandarin Sky",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-mandarin.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Mandarin%20Sky"
    },
    {
        id: "perfume-odyssey-homme",
        nombre: "Odyssey Homme",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-homme.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Homme"
    },
    {
        id: "perfume-odyssey-mega",
        nombre: "Odyssey Mega",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-mega.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Mega"
    },
    {
        id: "perfume-honor-glory",
        nombre: "Honor & Glory",
        marca: "Lattafa",
        tipo: "completo",
        precio: 1999,
        imagen: "honor-glory.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Honor%20%26%20Glory"
    },
    {
        id: "perfume-oud-glory",
        nombre: "Oud for Glory",
        marca: "Lattafa",
        tipo: "completo",
        precio: 1999,
        imagen: "oud-glory.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Oud%20for%20Glory"
    },
    {
        id: "perfume-amethyst",
        nombre: "Amethyst",
        marca: "Lattafa",
        tipo: "completo",
        precio: 1999,
        imagen: "amethyst.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Amethyst"
    },
    {
        id: "perfume-club de nuit-intense",
        nombre: "Club de Nuit Intense",
        marca: "Armaf",
        tipo: "completo",
        precio: 2399,
        imagen: "cdn-intense.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Cdn%20Intense"
    },
    {
        id: "perfume-odyssey-spectra",
        nombre: "Odyssey Spectra",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-spectra.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Spectra"
    },
    {
        id: "perfume-odyssey-pink",
        nombre: "Odyssey Pink Pop",
        marca: "Armaf",
        tipo: "completo",
        precio: 2599,
        imagen: "odyssey-pink.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    }
    {
    id: "perfume-island-breeze",
    nombre: "Island Breeze",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 3399,
    imagen: "island-breeze.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Island%20Breeze"
},
{
    id: "perfume-veneno-scarlet",
    nombre: "Veneno Scarlet",
    marca: "French Avenue",
    tipo: "completo",
    precio: 3099,
    imagen: "veneno-scarlet.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Veneno%20Scarlet"
},
{
    id: "perfume-chants",
    nombre: "Chants",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 2299,
    imagen: "chants.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Chants"
},
{
    id: "perfume-set-yara",
    nombre: "Set Yara",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2699,
    imagen: "set-yara.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20Set%20Yara"
},
{
    id: "perfume-afeef",
    nombre: "Afeef",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2599,
    imagen: "afeef.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Afeef"
},
{
    id: "perfume-mayar-cherry-intense",
    nombre: "Mayar Cherry Intense",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "mayar-cherry-intense.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Mayar%20Cherry%20Intense"
},
{
    id: "perfume-victoria",
    nombre: "Victoria",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2499,
    imagen: "victoria.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Victoria"
},
{
    id: "perfume-hawas-ice",
    nombre: "Hawas Ice",
    marca: "Rasasi",
    tipo: "completo",
    precio: 2599,
    imagen: "hawas-ice.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Hawas%20Ice"
},
{
    id: "perfume-hawas-for-him",
    nombre: "Hawas For Him",
    marca: "Rasasi",
    tipo: "completo",
    precio: 2399,
    imagen: "hawas-for-him.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Hawas%20For%20Him"
},
{
    id: "perfume-pacific-blue",
    nombre: "Pacific Blue",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 2399,
    imagen: "pacific-blue.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Pacific%20Blue"
},
{
    id: "perfume-odyssey-bahamas",
    nombre: "Odyssey Bahamas",
    marca: "Armaf",
    tipo: "completo",
    precio: 2799,
    imagen: "odyssey-bahamas.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Odyssey%20Bahamas"
},
{
    id: "perfume-cdn-bling",
    nombre: "Club de Nuit Bling",
    marca: "Armaf",
    tipo: "completo",
    precio: 3099,
    imagen: "cdn-bling.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20CDN%20Bling"
},
{
    id: "perfume-cocoa-morado",
    nombre: "Cocoa Morado",
    marca: "French Avenue",
    tipo: "completo",
    precio: 2999,
    imagen: "cocoa-morado.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Cocoa%20Morado"
},
{
    id: "perfume-azzure-aoud",
    nombre: "Azzure Aoud",
    marca: "French Avenue",
    tipo: "completo",
    precio: 2999,
    imagen: "azzure-aoud.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Azzure%20Aoud"
},
{
    id: "perfume-lovely-cherie",
    nombre: "Lovely Cherie",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 2199,
    imagen: "lovely-cherie.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20Lovely%20Cherie"
}
];
