//Manajemen Transportasi menggunakan OOP 

// menambhkan class pelanggan atau[un data yang ada 
class pelanggan {
    constructor ( nama, nomorTelpeon, kendaraanDisewa) 
    {
    this.nama = nama;
    this.nomorTelepon = nomorTelpeon;
    this.kendaraanDisewa = kendaraanDisewa;
    }


//membuat methide baru untuk menampilkan data yang di atas 
    tampilkanInfo(){
        console.log("Nama Pelanggan: " + this.nama);
        console.log("Nomor Telepon: " + this.nomorTelepon);
        console.log("Kendaraan yang Disewa: " + this.kendaraanDisewa);
        console.log("-----------------------------");
        }
    }

//class transportasi
    class transportasi {
        constructor(){
            this.daftarPelanggan = [];
        }

//metode tambah pelanggan
tambahPelanggan(nama, nomorTelepon, kendaraanDisewa){
    const pelangganBaru = new pelanggan(nama, nomorTelepon, kendaraanDisewa);
    this.daftarPelanggan.push(pelangganBaru);
}

//menampilmkan semua pelanggan
tampilkanPelanggan(){
    console.log("Daftar Pelanggan");
    console.log("-----------------------------");

    if(this.daftarPelanggan.length === 0){
        console.log("Tidak ada pelanggan yang terdaftar menyewa kendaraan.");
        return;
    }

    this.daftarPelanggan.forEach((pelanggan, index) => {
        console.log(`Pelanggan ${index + 1}`);
        pelanggan.tampilkanInfo();
    });
}
    }


//======
//untuk menjalankan sistem yang ada 

//membuat objek sistem 
const sistemTransportasi = new transportasi();

// //menambahkan pelanggan
// sistemTransportasi.tambahPelanggan("Andi", "08123456789", "Mobil");
// sistemTransportasi.tambahPelanggan("Budi", "08234567890", "Motor");

//menampilkan daftar pelanggan 
sistemTransportasi.tampilkanPelanggan();

