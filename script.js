// MAGSHOP ERP v1.1 - JavaScript
console.log('Magshop ERP v1.1 loaded!');

// ΕΠΙΛΟΓΗ ΣΤΟΙΧΕΙΩΝ (DOM Selection)
// Αυτό βρίσκει τα στοιχεία στη σελίδα
const btnTamio = document.getElementById ('btn-tamio');
const btnParaggelies = document.getElementById ('btn-paraggelies');
const sectionTamio = document.getElementById ('section-tamio');
const sectionParaggelies = document.getElementById ('section-paraggelies');

// ΣΥΝΑΡΤΗΣΗ: Εμφάνιση Ταμείου
function showTamio() {
    //Δείξε το ταμείο
    sectionTamio.classList.add ('active');
    //Κρύψε τις παραγελίες
    sectionParaggelies.classList.remove('active');
}

// ΣΥΝΑΡΤΗΣΗ: Εμφάνιση Παραγγελιών
function showParaggelies() {
    //Κρύψε το ταμειο
    sectionTamio.classList.remove ('active');
    //Δείξε τις παραγγελίες
    sectionParaggelies.classList.add ('active');
}

// EVENT LISTENERS (Αντιδράσεις σε κλικ)
btnTamio.addEventListener ('click', showTamio);
btnParaggelies.addEventListener ('click', showParaggelies);

// ΑΡΧΙΚΟΠΟΙΗΣΗ - Τι να φαίνεται στην αρχή
showTamio(); // Εμφάνισε το Ταμείο όταν φορτώνει η σελίδα