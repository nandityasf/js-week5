// console.log("Step 1")
// setTimeout(function(){
//     console.log("Step 3")
// },5000)
// console.log("Step 2")

const notify = () =>{
    console.log("sudah selesai")
}

const startPlayGame = (name, callback) =>{
console.log("start game "+name+ "sekarang!")
callback()
}

const nama = "beatle realms"
startPlayGame(nama, notify)