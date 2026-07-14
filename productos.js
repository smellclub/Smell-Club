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
        imagen: "club-nuit-bling.jpg",
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
    },
 {
        id: "perfume-yara-moi",
        nombre: "Yara Moi",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2099,
        imagen: "yara moi.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
 {
        id: "perfume-yara-rosa",
        nombre: "Yara Rosa",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2199,
        imagen: "yara rosa.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    }, 
    {
        id: "perfume-yara-candy",
        nombre: "Yara Candy",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "yara candy.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-yara-tous",
        nombre: "Yara Tous",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2099,
        imagen: "yara tous.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-mayar-intense",
        nombre: "Mayar natural Intense",
        marca: "Maison Alhambra",
        tipo: "completo",
        precio: 2299,
        imagen: "mayar.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-haya",
        nombre: "Haya",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "haya.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-sekeena",
        nombre: "Sekeena",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "sekeena.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-emaan",
        nombre: "Emaan",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "emaan.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-eclaire",
        nombre: "Eclaire",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2399,
        imagen: "eclaire.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-sublime",
        nombre: "Sublime",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2399,
        imagen: "sublime.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-noble",
        nombre: "Noble Blush",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2399,
        imagen: "noble.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-elixir",
        nombre: "Club de Nuit Elixir",
        marca: "Armaf",
        tipo: "completo",
        precio: 2799,
        imagen: "cdn elixir.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-iconic",
        nombre: "Club de Nuit Iconic",
        marca: "Armaf",
        tipo: "completo",
        precio: 2699,
        imagen: "cdn iconic.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-precieux",
        nombre: "Club de Nuit Precieux",
        marca: "Armaf",
        tipo: "completo",
        precio: 3199,
        imagen: "precieux.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-imperiale",
        nombre: "Club de Nuit Imperiale",
        marca: "Armaf",
        tipo: "completo",
        precio: 2699,
        imagen: "imperiale.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-woman",
        nombre: "Club de Nuit Woman",
        marca: "Armaf",
        tipo: "completo",
        precio: 2399,
        imagen: "woman.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-club-nuit-maleka",
        nombre: "Club de Nuit Maleka",
        marca: "Armaf",
        tipo: "completo",
        precio: 3199,
        imagen: "maleka.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-kamrah",
        nombre: "Kamrah",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2399,
        imagen: "kamrah.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-qahwa",
        nombre: "Kamrah Qahwa",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2399,
        imagen: "qahwa.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-dukhan",
        nombre: "Kamrah Dukhan",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2899,
        imagen: "dukhan.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-sceptre-malachite",
        nombre: "Sceptre Malachite",
        marca: "Maison Alhambra",
        tipo: "completo",
        precio: 2299,
        imagen: "malachite.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-fakhar",
        nombre: "Fakhar",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "fakhar.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-fakhar-gold",
        nombre: "Fakhar Gold Extrait",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "fakhar gold.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-fakhar-rose",
        nombre: "Fakhar Rose",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2299,
        imagen: "fakhar rose.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-salvo",
        nombre: "Salvo Intense",
        marca: "Maison Alhambra",
        tipo: "completo",
        precio: 2099,
        imagen: "salvo.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-angham",
        nombre: "Angham",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2199,
        imagen: "angham.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-hayaaki-black",
        nombre: "Hayaaki Black",
        marca: "Lattafa",
        tipo: "completo",
        precio: 2599,
        imagen: "hayaaki black.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-qaed-fursan",
        nombre: "Qaed Al Fursan Unlimited",
        marca: "Lattafa",
        tipo: "completo",
        precio: 1199,
        imagen: "al fursan unlimited.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    },
     {
        id: "perfume-qaed-al-fursan",
        nombre: "Qaed Al Fursan",
        marca: "Lattafa",
        tipo: "completo",
        precio: 1199,
        imagen: "al fursan.jpg",
        linkWhatsApp: "https://wa.me/59894055919?text=Hola!%20Quiero%20el%20perfume%20completo%20Odyssey%20Pink%20Pop"
    };
