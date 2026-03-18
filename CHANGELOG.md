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

---

## v3.0 (18-03-2026) - Orders Module

### ✨ New Features
- Ξεχωριστό orders[] array & localStorage key 'magshop_v3.0_orders'
- Φόρμα παραγγελιών: Ημ.Παραγγελίας, Ημ.Παράδοσης, Αρ.Παραγγελίας, Προμηθευτής, Περιγραφή, Ποσό, Σημειώσεις
- Table παραγγελιών με toggle status (⏳ Εκκρεμεί / ✅ Παραλήφθη)
- Search & Date filter για παραγγελίες
- Delete παραγγελίας
- paid: auto-true όταν δεν υπάρχει προκαταβολή
- Phone input: μόνο αριθμοί (regex replace)

### 🐛 Bug Fixes
- parseFloat || 0 για ασφαλή αριθμητικές πράξεις
- Event listener εκτός function (phoneInput)

## v3.1 (18-03-2026) - Sidebar Dashboard Layout

### ✨ New Features
- Sidebar navigation (fixed, 250px, 100vh)
- Active state στα nav buttons (JS classList)
- 2-γραμμή φόρμα Ταμείου (form-row layout)
- CSS Specificity override για Παραγγελίες form
- Focus states σε όλα τα inputs
- min-width: 1280px για desktop-first
- Date filter στις Παραγγελίες
- localStorage key: 'magshop_v3.1'

### 🐛 Bug Fixes
- flex-direction override για Orders form
- min-width: 0 στα form inputs
- orderAmount toFixed crash → parseFloat || 0

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

---
</details>
