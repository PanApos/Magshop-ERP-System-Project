// MAGSHOP ERP v3.1

console.log('Magshop ERP v3.1 loaded');

let entries = JSON.parse(localStorage.getItem('magshop_v3.1') || '[]');
let orders = JSON.parse(localStorage.getItem('magshop_v3.1_orders') || '[]');

//DOM ELEMENTS
const btnTamio = document.getElementById('btn-tamio');
const btnParaggelies = document.getElementById('btn-paraggelies');
const sectionTamio = document.getElementById('financeContent');
const sectionParaggelies = document.getElementById('section-paraggelies');
const searchOrderInput = document.getElementById('searchOrderInput');
const ordersTableBody = document.getElementById ('ordersTableBody');


//SEARCH BAR + FILTER
const searchInput = document.getElementById('searchInput');
const dateFilter = document.getElementById('dateFilter');
const orderDateFilter = document.getElementById('orderDateFilter');
const resetBtn = document.getElementById('resetBtn');
const tableBody = document.getElementById('tableBody');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const netBalanceEl = document.getElementById('netBalance');

//NAVIGATION
function showTamio() {
    sectionTamio.classList.add('active');
    sectionParaggelies.classList.remove('active');
    btnTamio.classList.add('active');
    btnParaggelies.classList.remove('active');
    renderTable();
}
function showParaggelies() {
    sectionTamio.classList.remove('active');
    sectionParaggelies.classList.add('active');
    btnTamio.classList.remove('active');
    btnParaggelies.classList.add('active');
    renderOrdersTable();
}

// NAVIGATION EVENT  LISTENERS 
btnTamio?.addEventListener('click', showTamio);
btnParaggelies?.addEventListener('click', showParaggelies);

//ADD ENTRY
function addEntry() {
    const type = document.getElementById('entryType')?.value || '📈 Έσοδο';
    const product = document.getElementById('product')?.value.trim();
    const customer = document.getElementById('customer')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const downpayment = parseFloat(document.getElementById('downpayment')?.value) || 0;
    const notes = document.getElementById('notes')?.value.trim()||'' ;
    const method = document.getElementById('method')?.value || '💵 Μετρητά'; 
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
        phone,
        downpayment,
        notes,
        method,
        amount,
        paid:downpayment >0 ? false : true,
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

// ADD ORDER 
function addOrder() {
    const orderDateStr = document.getElementById('orderDate')?.value || new Date().toISOString().split('T')[0];
    const deliveryDateStr = document.getElementById('deliveryDate')?.value;
    const orderId= document.getElementById ('orderId')?.value.trim();
    const supplier = document.getElementById('supplier')?.value.trim();
    const orderDesc = document.getElementById('orderDesc')?.value.trim();
    const orderAmount = parseFloat(document.getElementById('orderAmount')?.value) || 0;
    const orderNotes = document.getElementById('orderNotes')?.value.trim();

    if (!supplier || !orderDesc || orderAmount <= 0) {
        alert('⚠️ Προμηθευτής, Περιγραφή και Ποσό είναι απαραίτητα!');
        return;
    }

    //ΔΗΜΙΟΥΡΓΙΑ ΠΑΡΑΓΓΕΛΙΑΣ
    const order ={
        id: Date.now(),
        orderDate: new Date(orderDateStr).toLocaleDateString('el-GR'),
        filterOrderDate: orderDateStr,
        deliveryDate: deliveryDateStr ? new Date(deliveryDateStr).toLocaleDateString('el-GR') : '-',
        orderId: orderId || '-',
        supplier,
        orderDesc,
        orderAmount,
        orderNotes: orderNotes || '-',
        status: false 
    };

    orders.unshift(order);
    saveOrdersData();
    clearOrderForm();
    renderOrdersTable();
    console.log('Order added', order);
}
// CLEAR FORM FIELDS
function clearForm() {
    ['product', 'customer', 'amount', 'entryDate', 'phone', 'downpayment', 'notes'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('method').selectedIndex = 0;
}

function clearOrderForm() {
    ['orderDate', 'deliveryDate', 'orderId', 'supplier', 'orderDesc', 'orderAmount', 'orderNotes'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
}

// TABS INCOME/EXPENSE 
let currentTab ='income';

function switchTab(tab) {
    currentTab = tab;

    //Update active class
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelector('.stats-grid--income').classList.toggle('stats-card--active', tab === 'income');
    document.querySelector('.stats-grid--expense').classList.toggle('stats-card--active', tab === 'expense');

    renderTable();
    updateTabDisplay();

    console.log(`Switched to ${tab}`);
    
}

// FORM UPDATE + TAB DISPLAY / SYNC
function updateTabDisplay() {
    const customerField = document.getElementById('customer');
    const phoneField = document.getElementById('phone');
    const phoneHeader = document.getElementById('phoneHeader')
    const typeSelect = document.getElementById('entryType');
    const headerCell = document.querySelector('#tableHeaderRow th:nth-child(4)');
   
    

    if (currentTab === 'income') {
        //Έσοδα
        customerField.placeholder = 'Πελάτης';
        if (phoneField) phoneField.placeholder ='Τηλέφωνο';
        typeSelect.value = '📈 Έσοδο'; 

    }
    else {
        //Έξοδα
        customerField.placeholder = 'Προμηθευτής'
        if (phoneField) phoneField.placeholder = 'Αρ.Παραγγελίας'
        typeSelect.value = '📉 Έξοδο';
    }   
    
    if (headerCell) {
        headerCell.textContent = currentTab === 'income' ? 'ΠΕΛΑΤΗΣ' : 'ΠΡΟΜΗΘΕΥΤΗΣ';
    }

    if (phoneHeader) {
        phoneHeader.textContent = currentTab == 'income' ? 'ΤΗΛΕΦΩΝΟ' : 'ΑΡ.ΠΑΡΑΓΓΕΛΙΑΣ'
    }
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
        const matchesTab = currentTab === 'income' ? entry.type === '📈 Έσοδο' :
                           currentTab === 'expense' ? entry.type === '📉 Έξοδο': true;
        return matchesSearch && matchesDate &&matchesTab;
    });

    filteredEntries.forEach(entry => {
        const row = document.createElement('tr');
        const amountDisplay = entry.downpayment ? `${entry.amount.toFixed(2)}€<br><small class="downpayment-info">Προκ.:${entry.downpayment.toFixed(2)}€</small>
        <br><small class="remaining-info">Υπόλ: ${(entry.amount - entry.downpayment).toFixed(2)}€</small>` : `${entry.amount.toFixed(2)}€`;
        const statusIcon = entry.paid ? '✅' : '❌';
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.type}</td>
            <td>${entry.product}</td>
            <td>${entry.customer}</td>
            <td>${entry.phone || '-'}</td>
            <td>${entry.notes || '-'}</td>
            <td>${entry.method}</td> 
            <td>${amountDisplay}</td>
            <td>
                <button class="action-btn status-btn ${entry.paid ? 'paid' : 'unpaid'}"
                onclick="togglePaid(${entry.id})"
                title="Κατάσταση">${entry.paid ? '✅' : '❌'}</button>
                <button class="action-btn delete-btn" onclick="deleteEntry(${entry.id})">🗑️</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function renderOrdersTable() {
    if (!ordersTableBody) return; //Ασφάλεια

    const searchTerm = searchOrderInput ? searchOrderInput.value.toLowerCase() : '';
    ordersTableBody.innerHTML= '';
    const filterDate = orderDateFilter ? orderDateFilter.value : '';


    const filteredOrders = orders.filter(order => {
        const matchesSearch =
            (order.orderId && order.orderId.toLowerCase().includes(searchTerm)) ||
            (order.supplier && order.supplier.toLowerCase().includes(searchTerm)) ||
            (order.orderDesc && order.orderDesc.toLowerCase().includes(searchTerm));
        const matchesDate = !filterDate || order.filterOrderDate === filterDate;
        return matchesSearch && matchesDate;
    });
    

    filteredOrders.forEach(order => {
        const row = document.createElement('tr');
        const statusClass = order.status ? 'paid' : 'unpaid';
        const statusIcon = order.status ? '✅' : '⏳';
        const statusText = order.status ? 'Παραλήφθη' : 'Εκκρεμεί';

        row.innerHTML = `
        <td>${order.orderDate}</td>
        <td>${order.deliveryDate}</td>
        <td>${order.orderId}</td>
        <td>${order.supplier}</td>
        <td>${order.orderAmount.toFixed(2)}€</td>
        <td>${order.orderNotes}</td>
        <td>
            <button class="action-btn status-btn ${statusClass}"
            onclick="toggleOrderStatus(${order.id})"
            title="Αλλαγή Κατάστασης">
            ${statusIcon} ${statusText} 
            </button>
        </td>
        <td>
            <button class="action-btn delete-btn" onclick="deleteOrder(${order.id})">🗑️</button>
        </td>
        `;
        ordersTableBody.appendChild(row);
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

function deleteOrder(id) {
    if (confirm('Είστε σίγουροι για τη διαγραφή αυτής της παραγγελίας;')) {
        orders = orders.filter(o => o.id !== id);
        saveOrdersData();
        renderOrdersTable();
    }
}

// RESET FILTERS
function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (dateFilter) dateFilter.value = '';
    renderTable();
}

function resetOrderFilters() {
    if (searchOrderInput) searchOrderInput.value = '';
    if (orderDateFilter) orderDateFilter.value = '';
    renderOrdersTable();
}

// SEARCH / FILTER / INPUT EVENT LISTENERS 

// SEARCH /FILTER 
if (searchInput) searchInput.addEventListener('input', renderTable);
if (dateFilter) dateFilter.addEventListener('change', renderTable);
if (orderDateFilter) orderDateFilter.addEventListener('change', renderOrdersTable);
if (resetBtn) resetBtn.addEventListener('click', resetFilters);
if (searchOrderInput) searchOrderInput.addEventListener('input', renderOrdersTable);

//FORM TYPE -> TYPE SYNC
const entryTypeSelect = document.getElementById('entryType');

if (entryTypeSelect) {
    entryTypeSelect.addEventListener('change', function() {
        const tab = this.value === '📈 Έσοδο' ? 'income' : 'expense';

        switchTab(tab);
    });
}

// PHONE — ΜΟΝΟ ΑΡΙΘΜΟΙ
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

// TOGGLE PAID 
function togglePaid(id) {
    const entry = entries.find(e => e.id === id);
    if (entry) {
        entry.paid = !entry.paid;
        saveData();
        renderTable();
    }
}

// TOGGLE ORDER STATUS
function toggleOrderStatus(id) {
    const order = orders.find(o => o.id === id);
    if (order) {
        order.status = !order.status;
        saveOrdersData();
        renderOrdersTable();
    }
}

// SAVE DATA
function saveData() {
    localStorage.setItem('magshop_v3.1', JSON.stringify(entries));
}

function saveOrdersData() {
    localStorage.setItem('magshop_v3.1_orders', JSON.stringify(orders));
}

document.addEventListener('DOMContentLoaded', () => {
    showTamio();
    renderTable();
    updateStats();
    updateTabDisplay();
    console.log(`v3.1 ready! Entries: ${entries.length} | Orders: ${orders.length}`);
});