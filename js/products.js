document.addEventListener("DOMContentLoaded", function () {


const itemsPerPageSelect = document.getElementById('itemsPerPageSelect');
let itemsPerPage = parseInt(itemsPerPageSelect.value);
let currentPage = 1;
let currentView = 'grid';

// Event listener for dropdown
itemsPerPageSelect.addEventListener('change', () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value);
    currentPage = 1; // Reset to first page
    renderProducts(currentPage, currentView);
});

function renderProducts(page, view) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    const productGrid = document.getElementById('productGrid');
    productGrid.className = `product-grid ${view}-view`;
    productGrid.innerHTML = '';

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="content">
              <h4>${product.name}</h4>
              <p class="price">Rp ${product.price.toLocaleString()}</p>
              <p class="description">${product.description}</p>
              <button class="btn-tambah" data-nama="${product.name}" data-harga="${product.price}">Tambah</button>
              <button class="btn-beli" data-nama="${product.name}" data-harga="${product.price}">Beli</button>
            </div>
          `;
        productGrid.appendChild(productCard);
    });

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts(currentPage, currentView);
        }
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? 'active' : '';
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderProducts(currentPage, currentView);
        });
        pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts(currentPage, currentView);
        }
    });
    pagination.appendChild(nextButton);
}

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentView = button.dataset.view;
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProducts(currentPage, currentView);
    });
});

// Initial render
renderProducts(currentPage, currentView);
window.renderPagination = renderPagination;
window.renderProducts = renderProducts;


});