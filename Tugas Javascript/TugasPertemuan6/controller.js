import users from "./data.js";

//menampilkan data
const index = () => {
    console.log("=== DAFTAR USER ===");

    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat}`);
    });
};

//menambahkan data 
const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan!");
};

//menghapus data 
const destroy = () => {
    users.pop();
    console.log("Data terakhir berhasil dihapus!");
};

export { index, store, destroy };