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
        imagen: "candee.jpg",
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
    },
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
    imagen: "hawas for him.jpg",
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
},
{
    id: "perfume-cdn-elixir",
    nombre: "Club de Nuit Elixir",
    marca: "Armaf",
    tipo: "completo",
    precio: 2799,
    imagen: "cdn-elixir.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Elixir"
},
{
    id: "perfume-cdn-iconic",
    nombre: "Club de Nuit Iconic",
    marca: "Armaf",
    tipo: "completo",
    precio: 2699,
    imagen: "cdn-iconic.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Iconic"
},
{
    id: "perfume-cdn-precieux",
    nombre: "Club de Nuit Precieux",
    marca: "Armaf",
    tipo: "completo",
    precio: 3199,
    imagen: "cdn-precieux.png",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Precieux"
},
{
    id: "perfume-cdn-imperiale",
    nombre: "Club de Nuit Imperiale",
    marca: "Armaf",
    tipo: "completo",
    precio: 2699,
    imagen: "cdn-imperiale.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Imperiale"
},
{
    id: "perfume-cdn-woman",
    nombre: "Club de Nuit Woman",
    marca: "Armaf",
    tipo: "completo",
    precio: 2399,
    imagen: "woman.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Woman"
},
{
    id: "perfume-cdn-maleka",
    nombre: "Club de Nuit Maleka",
    marca: "Armaf",
    tipo: "completo",
    precio: 3199,
    imagen: "maleka.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20CDN%20Maleka"
},
{
    id: "perfume-khamrah",
    nombre: "Khamrah",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "khamrah.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Khamrah"
},
{
    id: "perfume-khamrah-qahwa",
    nombre: "Khamrah Qahwa",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "qahwa.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Khamrah%20Qahwa"
},
{
    id: "perfume-khamrah-dukhan",
    nombre: "Khamrah Dukhan",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2899,
    imagen: "dukhan.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Khamrah%20Dukhan"
},
{
    id: "perfume-sceptre-malachite",
    nombre: "Sceptre Malachite",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 2299,
    imagen: "malachite.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Sceptre%20Malachite"
},
{
    id: "perfume-angham",
    nombre: "Angham",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2199,
    imagen: "angham.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Angham"
},
{
    id: "perfume-fakhar-black",
    nombre: "Fakhar Black",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "fakhar.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Fakhar%20Black"
},
{
    id: "perfume-fakhar-gold-extrait",
    nombre: "Fakhar Gold Extrait",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "fakhar-gold.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Fakhar%20Gold%20Extrait"
},
{
    id: "perfume-fakhar-rose",
    nombre: "Fakhar Rose",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "fakhar rose.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Fakhar%20Rose"
},
{
    id: "perfume-salvo-intense",
    nombre: "Salvo Intense",
    marca: "Maison Alhambra",
    tipo: "completo",
    precio: 2099,
    imagen: "salvo.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Salvo%20Intense"
},
{
    id: "perfume-hayaati-black",
    nombre: "Hayaati Black",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2599,
    imagen: "hayaaki-black.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Hayaati%20Black"
},
{
    id: "perfume-qaed-al-fursan-unlimited",
    nombre: "Qaed Al Fursan Unlimited",
    marca: "Lattafa",
    tipo: "completo",
    precio: 1999,
    imagen: "al-fursan-unlimited.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Qaed%20Al%20Fursan%20Unlimited"
},
{
    id: "perfume-qaed-al-fursan",
    nombre: "Qaed Al Fursan",
    marca: "Lattafa",
    tipo: "completo",
    precio: 1999,
    imagen: "al-fursan.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Qaed%20Al%20Fursan"
},
{
    id: "perfume-9am-dive",
    nombre: "9AM Dive",
    marca: "Afnan",
    tipo: "completo",
    precio: 2699,
    imagen: "9am-dive.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%209AM%20Dive"
},
{
    id: "perfume-musamam",
    nombre: "Musamam",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2599,
    imagen: "mussamam.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Musamam"
},
{
    id: "perfume-vintage-radio",
    nombre: "Vintage Radio",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2499,
    imagen: "radio.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Vintage%20Radio"
},
{
    id: "perfume-ansaam-gold",
    nombre: "Ansaam Gold",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2499,
    imagen: "ansaam.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Ansaam%20Gold"
},
{
    id: "perfume-asad-zanzibar",
    nombre: "Asad Zanzibar",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "asad-zanzibar.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Asad%20Zanzibar"
},
{
    id: "perfume-asad-bourbon",
    nombre: "Asad Bourbon",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2499,
    imagen: "bourbon.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Asad%20Bourbon"
},
{
    id: "perfume-asad",
    nombre: "Asad",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "asad.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Asad"
},
{
    id: "perfume-the-kingdom",
    nombre: "The Kingdom",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2599,
    imagen: "the-kingdom.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20The%20Kingdom"
},
{
    id: "perfume-nebras",
    nombre: "Nebras",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2699,
    imagen: "nebras.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Nebras"
},
{
    id: "perfume-emeer",
    nombre: "Emeer",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "emeer.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Emeer"
},
{
    id: "perfume-sehr",
    nombre: "Sehr",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2599,
    imagen: "sehr.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Sehr"
},
{
    id: "perfume-tiramisu-coco",
    nombre: "Tiramisu Coco",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2699,
    imagen: "tiramisu-coco.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Tiramisu%20Coco"
},
{
    id: "perfume-yara-moi",
    nombre: "Yara Moi",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2099,
    imagen: "yara-moi.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Yara%20Moi"
},
{
    id: "perfume-yara-rosa",
    nombre: "Yara Rosa",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2199,
    imagen: "yara-rosa.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Yara%20Rosa"
},
{
    id: "perfume-yara-candy",
    nombre: "Yara Candy",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "yara candy.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Yara%20Candy"
},
{
    id: "perfume-yara-tous",
    nombre: "Yara Tous",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2099,
    imagen: "yara-tous.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Yara%20Tous"
},
{
    id: "perfume-mayar",
    nombre: "Mayar",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "mayar.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Mayar"
},
{
    id: "perfume-mayar-natural-intense",
    nombre: "Mayar Natural Intense",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "mayar-natural-intense.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Mayar%20Natural%20Intense"
},
{
    id: "perfume-haya",
    nombre: "Haya",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "haya.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Haya"
},
{
    id: "perfume-sakeena",
    nombre: "Sakeena",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2199,
    imagen: "sakeena.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Sakeena"
},
{
    id: "perfume-emaan",
    nombre: "Emaan",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "emaan.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Emaan"
},
{
    id: "perfume-eclaire",
    nombre: "Eclaire",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "eclaire.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Eclaire"
},
{
    id: "perfume-bharara-hombre",
    nombre: "Bharara",
    marca: "Bharara",
    tipo: "completo",
    precio: 3999,
    imagen: "bharara.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Bharara%20Hombre"
},
{
    id: "perfume-al-haramain-amber-oud",
    nombre: "Al Haramain Amber Oud",
    marca: "Al Haramain",
    tipo: "completo",
    precio: 3999,
    imagen: "al-haramain-amber-oud.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Al%20Haramain%20Amber%20Oud"
},
{
    id: "perfume-al-haramain-aqua-dubai",
    nombre: "Al Haramain Aqua Dubai",
    marca: "Al Haramain",
    tipo: "completo",
    precio: 3999,
    imagen: "al-haramain-aqua-dubai.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Al%20Haramain%20Aqua%20Dubai"
},
{
    id: "perfume-tharwah",
    nombre: "Tharwah",
    marca: "Lattafa",
    tipo: "completo",
    precio: 2399,
    imagen: "tharwah.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Tharwah"
},
{
    id: "perfume-odyssey-aqua",
    nombre: "Odyssey Aqua",
    marca: "Armaf",
    tipo: "completo",
    precio: 2599,
    imagen: "odyssey-aqua.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Odyssey%20Aqua"
},
{
    id: "perfume-odyssey-limoni",
    nombre: "Odyssey Limoni",
    marca: "Armaf",
    tipo: "completo",
    precio: 2599,
    imagen: "odyssey-limoni.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Odyssey%20Limoni"
},
{
    id: "perfume-odyssey-chocolat",
    nombre: "Odyssey Chocolat",
    marca: "Armaf",
    tipo: "completo",
    precio: 2599,
    imagen: "odyssey-chocolat.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Odyssey%20Chocolat"
},
{
    id: "perfume-liquid-brun",
    nombre: "Liquid Brun",
    marca: "Fragrance World",
    tipo: "completo",
    precio: 3099,
    imagen: "liquid-brun.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Liquid%20Brun"
},
{
    id: "perfume-tag-her",
    nombre: "Tag-Her",
    marca: "Armaf",
    tipo: "completo",
    precio: 2699,
    imagen: "tag-her.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Tag-Her"
},
{
    id: "perfume-atlas",
    nombre: "Lattafa",
    tipo: "completo",
    precio: 2299,
    imagen: "atlas.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Atlas"
},
{
    id: "perfume-island-bliss",
    nombre: "Island Bliss",
    marca: "Lattafa",
    tipo: "completo",
    precio: 3699,
    imagen: "island-bliss.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Island%20Bliss"
},
{
    id: "perfume-yum-yum",
    nombre: "Yum Yum",
    marca: "Lattafa",
    tipo: "completo",
    precio: 3699,
    imagen: "yum-yum.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Yum%20Yum"
},

{
    id: "perfume-vulcan-feu",
    nombre: "Vulcan Feu",
    marca: "Lattafa",
    tipo: "completo",
    precio: 3099,
    imagen: "vulcan.jpg",
    linkWhatsApp: "https://wa.me/59894055919?text=Hola%21%20Quiero%20el%20perfume%20Vulcan%20Feu"
}
] ;
