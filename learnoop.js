function Barang(name, price){
    this.name = name
    this.price = price
    this.detail = function(){
        return this.name + " " + this.price
    }
}

const barang1 = new Barang("Lenovo Thinkpad x230", 2000)
const barang2 = new Barang("Dell xps 13", 10000)
const barang3 = new Barang("Lenovo Thonkpad x1 carbon", 5000)

console.log(barang1.detail())
console.log(barang2.detail()) 
console.log(barang3.detail())

// class Kendaraan{
//     constructor(produsen){
//         this.produsen = produsen
//     }
//     lokasi(){
//         return "Lokasi" +this.produsen+ "ada pada 40 cabang Indonesia"
//     }
// }
// class Motor extends Kendaraan{
//     constructor(produsen){
//         super(produsen) 
//     }
// }