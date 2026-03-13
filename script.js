// MAGSHOP ERP v1.2

console.log('Magshop ERP v1.2 loaded');

let entries = JSON.parse(localStorage.getItem('magshop_v1.2') || '[]');

//DOM ELEMENTS
const btnTamio = document.getElementById('btn-tamio');
const btnParaggelies = document.getElementById('btn-paraggelies');
const sectionTamio = document.getElementById('financeContent');
const sectionParaggelies = document.getElementById('section-paraggelies');

//SEARCH BAR + FILTER
const searchInput = document.getElementById('searchInput');
const dateFilter = document.getElementById('dateFilter');
const resetBtn = document.getElementById('resetBtn');
const tableBody = document.getElementById('tableBody');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const netBalanceEl = document.getElementById('netBalance');

//NAVIGATION
function showTamio() {
    sectionTamio.classList.add('active');
    sectionParaggelies.classList.remove('active');
    renderTable();
}
function showParaggelies() {
    sectionTamio.classList.remove('active');
    sectionParaggelies.classList.add('active');
}

// EVENT LISTENERS 
btnTamio?.addEventListener('click', showTamio);
btnParaggelies?.addEventListener('click', showParaggelies);

//ADD ENTRY
function addEntry() {
    const type = document.getElementById('entryType')?.value || '📈 Έσοδο';
    const product = document.getElementById('product')?.value.trim();
    const customer = document.getElementById('customer')?.value.trim();
    const amount = parseFloat(document.getElementById('amount')?.value) || 0;
    const dateStr = document.getElementById('entryDate')?.value || new Date().toISOString().split('T')[0];

    if (!product || amount <= 0) {
        alert ('⚠️ Περιγραφή και Ποσό απαραίτητα!');
        return;
    }

    const entry = {
        id: Date.now(),
        type,
        product,
        customer,
        amount,
        date: new Date(dateStr).toLocaleDateString('el-GR'),
        filterDate:dateStr
    }

    entries.unshift(entry); // Η καινούργια καταχώρηση πρώτη
    saveData();
    clearForm();
    renderTable();
    updateStats();
    console.log('Entry added', entry)
}

// CLEAR FORM FIELDS
function clearForm() {
    ['product', 'customer', 'amount', 'entryDate'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

// RENDER TABLE + SEARCH 
function renderTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterDate = dateFilter.value;

    //CLEAR TABLE
    if (tableBody) tableBody.innerHTML = '';

    //FILTER + RENDER
const filteredEntries = entries.filter(entry => { 
        const matchesSearch = entry.product.toLowerCase().includes(searchTerm) ||       
                              entry.customer.toLowerCase().includes(searchTerm);
        const matchesDate = !filterDate || entry.filterDate === filterDate;
        return matchesSearch && matchesDate;
    });
    filteredEntries.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.type}</td>
            <td>${entry.product}</td>
            <td>${entry.customer}</td>
            <td>${entry.amount.toFixed(2)}€</td>
            <td>
                <button class="action-btn" onclick="deleteEntry(${entry.id})" title="Διαγραφή">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// UPDATE STATS 
function updateStats() {
    const income = entries
        .filter(e => e.type === '📈 Έσοδο')
        .reduce((sum, e) => sum + e.amount, 0);
    const expense = entries
        .filter(e => e.type === '📉 Έξοδο')
        .reduce((sum, e) => sum + e.amount, 0);
    const balance = income - expense;

    if(totalIncomeEl) totalIncomeEl.textContent = income.toFixed(2) + '€';
    if(totalExpenseEl) totalExpenseEl.textContent = expense.toFixed(2) + '€';
    if(netBalanceEl) netBalanceEl.textContent = balance.toFixed(2) + '€';
    
    console.log('Stats', {income,expense, balance});
}

// DELETE
function deleteEntry(id) {
    if (confirm('Διαγραφή εγγραφής')) {
        entries = entries.filter(e => e.id !== id);
        saveData();
        renderTable();
        updateStats();
    }
}

// RESET FILTERS
function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (dateFilter) dateFilter.value = '';
    renderTable();
}

// SEARCH /FILTER EVEN LISTENERS
if (searchInput) searchInput.addEventListener('input', renderTable);
if (dateFilter) dateFilter.addEventListener('change', renderTable);
if (resetBtn) resetBtn.addEventListener('click', resetFilters);

// SAVE DATA
function saveData() {
    localStorage.setItem('magshop_v1.2', JSON.stringify(entries));
}

document.addEventListener('DOMContentLoaded', () => {
    showTamio();
    renderTable();
    updateStats();
    console.log(`v1.2 ready! ${entries.length} entries loaded`);
});