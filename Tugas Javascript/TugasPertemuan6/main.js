import { index, store, destroy } from "./controller.js";

const main = () => {

    //menambah 2 data
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12" });

    // menampilkan data
    index();

    // menghapus data
    destroy();

    console.log("\nSetelah dihapus:");
    index();
};

main();