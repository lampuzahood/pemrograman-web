document.addEventListener("DOMContentLoaded", function () {
  function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.classList.add('show');

    // Auto-hide after 3 seconds
    setTimeout(() => {
      hidePopup();
    }, 3000);
  }

  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
  }

  function updateKeranjangCount() {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const countElement = document.getElementById("keranjang-count");
    if (countElement) {
      countElement.textContent = keranjang.length;
    } else {
      console.error("Element with ID 'keranjang-count' not found.");
    }
  }

  function tambahKeKeranjang(nama, harga) {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const index = keranjang.findIndex(item => item.nama === nama);

    if (index > -1) {
      keranjang[index].quantity += 1;
    } else {
      keranjang.push({ nama, harga, quantity: 1 });
    }

    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    updateKeranjangCount();
    showPopup(`${nama} berhasil ditambahkan ke keranjang.`);
  }

  // Event delegation for btn-tambah and btn-beli
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-tambah')) {
      const nama = event.target.getAttribute("data-nama");

      const harga = parseInt(event.target.getAttribute("data-harga"));
      console.log(`${nama} - ${harga}`)
      tambahKeKeranjang(nama, harga);
    } else if (event.target.classList.contains('btn-beli')) {
      const nama = event.target.getAttribute("data-nama");
      const harga = parseInt(event.target.getAttribute("data-harga"));
      tambahKeKeranjang(nama, harga);
      window.location.href = "keranjang.html";
    }
  });

  // Update keranjang saat halaman dimuat
  updateKeranjangCount();

  window.tambahKeKeranjang = tambahKeKeranjang;
  window.showPopup = showPopup;
  window.hidePopup = hidePopup;
  window.updateKeranjangCount = updateKeranjangCount;

});