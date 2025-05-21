function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function parseHarga(harga) {
  if (typeof harga === "number") return harga;
  if (!harga) return 0;

  // Hilangkan semua kecuali angka dan koma, lalu ganti koma jadi titik
  return parseFloat(harga.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
}

function tampilkanKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const container = document.getElementById("daftar-keranjang");
  const totalElement = document.getElementById("total-harga");
  container.innerHTML = "";
  let total = 0;

  if (keranjang.length === 0) {
    container.innerHTML = "<p>Keranjang masih kosong.</p>";
    totalElement.textContent = formatRupiah(0);
    return;
  }

  keranjang.forEach((item, index) => {
    const jumlah = parseInt(item.quantity) || 1;
    const hargaSatuan = parseInt(item.harga) || 0;
    const subtotal = hargaSatuan * jumlah;
    total += subtotal;

    const produkData = products.find(p => p.name === item.nama);
    const imageUrl = produkData ? produkData.image : "https://via.placeholder.com/150";

    const itemElement = document.createElement("div");
    itemElement.className = "item-keranjang";
    itemElement.innerHTML = `
      <div class="keranjang-item-layout">
        <div class="keranjang-gambar">
          <img src="${imageUrl}" alt="${item.nama}">
        </div>
        <div class="keranjang-info">
          <h4>${item.nama}</h4>
          <p>Harga: ${formatRupiah(hargaSatuan)}</p>
          <p>Jumlah: ${jumlah}</p>
          <p><strong>Total: ${formatRupiah(subtotal)}</strong></p>
        </div>
        <div class="keranjang-hapus">
          <button onclick="hapusItem(${index})">❌</button>
        </div>
      </div>
    `;

    container.appendChild(itemElement);
  });

  totalElement.textContent = formatRupiah(total);
}



function hapusItem(index) {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.splice(index, 1);
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  tampilkanKeranjang();
}

function checkout() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  if (keranjang.length === 0) {
    alert("Keranjang kamu masih kosong!");
    return;
  }

  // Tampilkan modal
  const modal = document.getElementById("checkout-modal");
  modal.classList.add("show");

  // Tombol konfirmasi
  document.getElementById("confirm-checkout").onclick = () => {
    localStorage.removeItem("keranjang");
    tampilkanKeranjang();
    modal.classList.remove("show");
    alert("Terima kasih telah belanja di FKLH Skins!");
  };

  // Tombol batal
  document.getElementById("cancel-checkout").onclick = () => {
    modal.classList.remove("show");
  };
}

window.onload = tampilkanKeranjang;
