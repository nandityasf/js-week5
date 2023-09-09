const regisForm = document.getElementById("regisForm")
const tabPendaftar = document.getElementById("tabPendaftar")
const resume = document.getElementById("resume")
if (nama.length < 10 || umur < 25 || uang < 100 || uang > 1000000) {
        alert("Pastikan data yang Anda masukkan sesuai kriteria!");
        return;
    }
    pendaftar.push({ nama, umur, uang });

let pendaftar = []

function submitForm(){
    const name = document.getElementById("name").value
    const age = parseInt(document.getElementById("age").value)
    const money = parseInt(document.getElementById("money").value)

    if (nama.length < 10 || umur < 25 || uang < 100 || uang > 1000000) {
        alert("Pastikan data yang Anda masukkan sesuai kriteria!");
        return;
    }
    pendaftar.push({ name, age, money });
    updateTable();
}