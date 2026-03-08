// MAGSHOP ERP v1.0 - JavaScript

// 1. ΕΠΙΛΟΓΗ ΣΤΟΙΧΕΙΩΝ (DOM Selection)
// Αυτό βρίσκει τα στοιχεία στη σελίδα
const btnTamio = document.getElementById ('btn-tamio');
const btnParaggelies = document.getElementById ('btn-paraggelies');
const sectionTamio = document.getElementById ('section-tamio');
const sectionParaggelies = document.getElementById ('section-paraggelies');

// 2. ΣΥΝΑΡΤΗΣΗ: Εμφάνιση Ταμείου
function showTamio() {
    //Δείξε το ταμείο
    sectionTamio.classList.add ('active');
    //Κρύψε τις παραγελίες
    sectionParaggelies.classList.remove('active');
}

// 3. ΣΥΝΑΡΤΗΣΗ: Εμφάνιση Παραγγελιών
function showParaggelies() {
    //Κρύψε το ταμειο
    sectionTamio.classList.remove ('active');
    //Δείξε τις παραγγελίες
    sectionParaggelies.classList.add ('active');
}

// 4. EVENT LISTENERS (Αντιδράσεις σε κλικ)
btnTamio.addEventListener ('click', showTamio);
btnParaggelies.addEventListener ('click', showParaggelies);

// 5. ΑΡΧΙΚΟΠΟΙΗΣΗ - Τι να φαίνεται στην αρχή
showTamio(); // Εμφάνισε το Ταμείο όταν φορτώνει η σελίδα