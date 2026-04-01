# MagShop ERP System - CHANGELOG

## v1.1 (13-03-2026) - Basic Layout

### ✨ New Features

- Header with Logo
- Navigation: Ταμείο / Παραγγελίες
- Search Bar
- Stats Cards (Income, Expense, Balance)
- Entry Form

## v1.2 (13-03-2026) - LocalStorage & Core

### ✨ New Features

- Form submit + validation
- LocalStorage persistence
- Dynamic table render/delete
- Real-time stats calculations
- entryDate input (separate from dateFilter)
- Table headers hardcoded in HTML
- viewport meta tag added

### 🐛 Bug Fixes

- Navigation: double event listener on btnParaggelies
- entryDate case-sensitive bug ('entrydate' → 'entryDate')
- Typo: 'REST FILTERS' → 'RESET FILTERS'
- CSS: expense card gradient fixed
- localStorage key: 'magshop_v1.2'

## v2.0 (14-03-2026) - Income/Expense Tabs & Form Expansion

### ✨ New Features

- Income/Expense tabs with auto table filter
- Dynamic form: Πελάτης ↔ Προμηθευτής / Τηλέφωνο ↔ Αρ.Παραγγελίας
- Table header change per tab
- entryType select syncs with tab (and vice versa)
- Stats card highlight on active tab
- New form fields: Τηλέφωνο, Προκαταβολή, Σημειώσεις, Μέθοδος Πληρωμής
- Downpayment display: Προκ. (orange) / Υπόλ. (red)
- Toggle paid status per entry (✅/❌)
- main-wrapper for consistent layout
- localStorage key: 'magshop_v2.0'

### 🐛 Bug Fixes

- tabs-contaier typo → tabs-container
- togglePaide → togglePaid
- Method select options syntax fixed
- textarea → input for notes field

## v3.0 (18-03-2026) - Orders Module

### ✨ New Features
- Separate orders[] array & localStorage key 'magshop_v3.0_orders'
- Orders Form : Ημ.Παραγγελίας, Ημ.Παράδοσης, Αρ.Παραγγελίας, Προμηθευτής, Περιγραφή, Ποσό, Σημειώσεις
- Table orders με toggle status (⏳ Εκκρεμεί / ✅ Παραλήφθη)
- Search & Date filter for orders
- Delete order 
- paid: auto-true όταν δεν υπάρχει προκαταβολή
- Phone input: only number (regex replace)

### 🐛 Bug Fixes
- parseFloat || 0 
- Event listener out of function (phoneInput)

## v3.1 (18-03-2026) - Sidebar Dashboard Layout

### ✨ New Features
- Sidebar navigation (fixed, 250px, 100vh)
- Active state  nav buttons (JS classList)
- 2 line form finance (form-row layout)
- CSS Specificity override for orders form
- Focus states all  inputs
- min-width: 1280px desktop-first
- Date filter for orders
- localStorage key: 'magshop_v3.1'

### 🐛 Bug Fixes
- flex-direction override για Orders form
- min-width: 0 στα form inputs
- orderAmount toFixed crash → parseFloat || 0

## v4.0 (18-03-2026) - Edit Functionality & Downpayment Stats Logic

### ✨ New Features
- Edit Panel: Added a slide-in bottom panel for finance and orders.
- Background Overlay: Implemented a blur effect for better UI focus.
- Hidden Inputs: Used `input type="hidden"` to securely store register IDs.
- Form Initialization: Added `openEditEntry()` and `openEditOrder()` to auto-populate forms with existing data.
- Update Logic: Implemented `saveEditEntry()` and `saveEditOrder()` using the spread operator for immutable updates.
- Precise Identification: Integrated `findIndex()` to accurately locate records within arrays.
- Deposit Logic in Stats: Updated logic where unpaid status reflects the deposit amount, and paid reflects the full amount
- Data Reversibility: Deposits are now persistently stored within the object.
- UI Components: Added `btn--danger` class for the "Cancel" button.ς
- Smooth Animations: Applied `cubic-bezier` transitions for the slide-in panel.
- Z-index Layering: Refined layering order: Sidebar (1000) → Overlay (2000) → Panel (2001)
- Enhanced Styling: Added `edit-btn` class with an accent hover effect for the ✏️ button.
- State Management: `updateStats()` is now triggered within `togglePaid()`
- localStorage key: 'magshop_v4.0'

### 🐛 Bug Fixes
- `editOrferId` typo → `editOrderId`
- CSS `columns` → `color` στο edit panel
- `edit-btn:hoveer` → `edit-btn:hover`
- State Sync: Resolved issue where stats failed to refresh after `togglePaid()` by adding `updateStats()`
- Date Format: Fixed date input bug by converting DD/MM/YYYY to YYYY-MM-DD using `padStart()`
- ode Cleanup: Removed unused `statusIcon` dead code from `renderTable()`
- HTML typo: `COMPOMETNS` → `COMPONENTS`

## v5.0 (20-03-2026) - Backup System, Exports & Dark Mode

### ✨ New Features
- **Dark Mode:** Integrated toggle in sidebar header with LocalStorage persistence and CSS variables.
- **JSON Backup & Restore:** Complete data portability for entries and orders.
- **Excel Export (CSV):** Professional export with Greek character support (BOM) and semicolon delimiters.
- **TXT Report:** Detailed text-based summary of finance and orders.
- **UI/UX:** Sidebar footer hover-activated menu for backup controls.
- **Animations:** Added button "lift" effects and smooth cubic-bezier transitions for panels.

### 🐛 Bug Fixes
- **Date Parsing:** Fixed padding issues in `saveEditOrder` (DD/MM to YYYY-MM-DD conversion).
- **ID Consistency:** Enforced `Number()` conversion for ID lookups to prevent type-mismatch bugs.
- **Contrast Fixes:** Adjusted stats cards and label visibility in Dark Mode.
- **Typo Cleanup:** Fixed `restoreFile` and `download` typos in function names and IDs.
- **LocalStorage Key:** Updated to 'magshop_v5.0'.

---

## 🇬🇷 Ελληνική Έκδοση

<details>
<summary><b>Κάντε κλικ για Ελληνικά</b></summary>

## v1.1 (13-03-2026) - Βασικό Layout

### ✨ Νέες Λειτουργίες

- Header με Logo
- Πλοήγηση: Ταμείο / Παραγγελίες
- Search Bar
- Stats Cards (Έσοδα, Έξοδα, Υπόλοιπο)
- Φόρμα Καταχώρησης

## v1.2 (13-03-2026) - LocalStorage & Core

### ✨ Νέες Λειτουργίες

- Υποβολή φόρμας + validation
- Αποθήκευση LocalStorage
- Δυναμικός πίνακας / διαγραφή
- Real-time στατιστικά
- Ξεχωριστό entryDate input
- Table headers στο HTML
- viewport meta tag

### 🐛 Διορθώσεις

- Double event listener στο btnParaggelies
- Case-sensitive bug στο entryDate
- Typo: 'REST' → 'RESET FILTERS'
- Gradient κάρτας εξόδων
- localStorage key: 'magshop_v1.2'

## v2.0 (14-03-2026) - Tabs Εσόδων/Εξόδων & Επέκταση Φόρμας

### ✨ Νέες Λειτουργίες

- Tabs Εσόδων/Εξόδων με αυτόματο φίλτρο
- Δυναμική φόρμα: Πελάτης ↔ Προμηθευτής
- Αλλαγή headers πίνακα ανά tab
- Sync entryType select ↔ tab
- Highlight stats card ανά tab
- Νέα πεδία: Τηλέφωνο, Προκαταβολή, Σημειώσεις, Μέθοδος
- Εμφάνιση Προκ. (πορτοκαλί) / Υπόλ. (κόκκινο)
- Toggle κατάστασης εξόφλησης (✅/❌)
- main-wrapper για layout
- localStorage key: 'magshop_v2.0'

### 🐛 Διορθώσεις

- Typo: tabs-contaier → tabs-container
- togglePaide → togglePaid
- Syntax options του method select
- textarea → input για σημειώσεις

## v3.0 (18-03-2026) - Module Παραγγελιών

### ✨ Νέες Λειτουργίες
- Ξεχωριστό orders[] array & localStorage 'magshop_v3.0_orders'
- Φόρμα παραγγελιών με όλα τα πεδία
- Toggle status (⏳ Εκκρεμεί / ✅ Παραλήφθη)
- Search & Date filter
- Διαγραφή παραγγελίας
- Auto paid=true χωρίς προκαταβολή
- Phone: μόνο αριθμοί

### 🐛 Διορθώσεις
- parseFloat || 0 για ασφάλεια
- Event listener εκτός function

## v3.1 (18-03-2026) - Sidebar Dashboard Layout

### ✨ Νέες Λειτουργίες
- Sidebar πλοήγηση (fixed, 250px, 100vh)
- Active state στα nav buttons
- 2-γραμμή φόρμα Ταμείου
- CSS Specificity override για Παραγγελίες
- Focus states στα inputs
- min-width: 1280px desktop-first
- Date filter στις Παραγγελίες
- localStorage key: 'magshop_v3.1'

### 🐛 Διορθώσεις
- flex-direction override για Orders form
- min-width: 0 στα inputs
- orderAmount toFixed crash fix

## v4.0 (18-03-2026) - Edit Functionality & Λογική Προκαταβολής

### ✨ Νέες Λειτουργίες
- Edit Panel (slide-in από κάτω) για Ταμείο & Παραγγελίες
- Background Overlay με blur effect
- `input type="hidden"` για αποθήκευση ID
- Γέμισμα φόρμας με υπάρχοντα δεδομένα
- Update εγγραφής με spread operator
- `findIndex()` για ακριβή εντοπισμό
- Λογική Stats: unpaid→προκαταβολή, paid→πλήρες ποσό
- Αναστρεψιμότητα προκαταβολής
- `btn--danger` για Ακύρωση
- `cubic-bezier` animation
- z-index layering: 1000→2000→2001
- `updateStats()` στο `togglePaid()`
- localStorage key: 'magshop_v4.0'

### 🐛 Διορθώσεις
- `editOrferId` → `editOrderId`
- CSS `columns` → `color`
- `hoveer` → `hover`
- Stats δεν ενημερώνονταν μετά togglePaid
- Date format DD/MM/YYYY → YYYY-MM-DD
- Dead code αφαιρέθηκε
- HTML typo: COMPOMETNS → COMPONENTS

## v5.0 (20-03-2026) - Σύστημα Backup, Εξαγωγές & Dark Mode

### ✨ Νέες Λειτουργίες
- **Dark Mode:** Εναλλαγή θέματος στο Sidebar Header με αποθήκευση στο LocalStorage.
- **Backup & Restore (JSON):** Πλήρης εξαγωγή και εισαγωγή δεδομένων (Ταμείο & Παραγγελίες).
- **Εξαγωγή Excel (CSV):** Υποστήριξη Ελληνικών (BOM) και ομαδοποίηση δεδομένων.
- **Εξαγωγή Report (TXT):** Συνοπτική αναφορά κειμένου.
- **UI/UX:** Hover menu στο Sidebar Footer για καθαρότερο περιβάλλον εργασίας.
- **Animations:** Εφέ ανύψωσης στα κουμπιά και ομαλές μεταβάσεις στα panels.

### 🐛 Διορθώσεις
- **Padding Ημερομηνίας:** Διόρθωση στην επεξεργασία παραγγελιών (μετατροπή σε ISO format).
- **Αξιοπιστία IDs:** Χρήση `Number()` για την αποφυγή σφαλμάτων στη σύγκριση IDs.
- **Contrast:** Βελτίωση αναγνωσιμότητας στατιστικών και ετικετών στο Dark Mode.
- **Typo Cleanup:** Διόρθωση ονομάτων σε συναρτήσεις και IDs (restoreFile).
- **LocalStorage Key:** Ενημέρωση σε 'magshop_v5.0'.

---
</details>