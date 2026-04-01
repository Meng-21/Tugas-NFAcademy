// membuat sistem manajemen pesanan untuk sebuah toko online
// data produk, pelanggan, dan pesanan menggunakan fungsi dan array.


//array produkToko yang menyimpan daftar produk

let produkToko =[
    {id: 1, nama: "Laptop", harga : 7000000, stock:5},
    {id: 2, nama: "Mouse", harga : 200000, stock:10},
    {id: 3, nama: "Keyboard", harga : 350000, stock:7}
];

// fungsi tambahProduk(nama, harga, stok) untuk menambahkan produk baru ke dalam array.

function tambahProduk(nama, harga, stock){
    let idBaru = produkToko.length + 1;
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stock: stock
    };
    produkToko.push(produkBaru);        //fungsi menambahkan produk menggunakan methode push()
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

//fungsi untuk menghapus produk berdasarkan id 

function hapusProduk(id){
    produkToko = produkToko.filter(produk => produk.id !== id);  //fungsi menghapus produk menggunakan metode filter () dan menggunkan operator !== untuk memeriksa apakah id produk tidak sama dengan id yang ingin dihapus. Jika id produk tidak sama, maka produk tersebut akan tetap ada dalam array produkToko. Namun, jika id produk sama dengan id yang ingin dihapus, maka produk tersebut akan dihapus dari array.
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);
}


//fungsi untuk menampilkan semua daftar produk yang tersedia di produkToko.

function tampilkanProduk(){
    console.log("Daftar Produk Toko:");
    produkToko.forEach(produk => {
        console.log("ID" + produk.id +
        ", Nama: " + produk.nama +
        ", Harga: " + produk.harga +
        ", Stock: " + produk.stock
        );
    });
}


tampilkanProduk();
tambahProduk("Headset", 500000, 15);
// tampilkanProduk();
hapusProduk(2);
// tampilkanProduk();
