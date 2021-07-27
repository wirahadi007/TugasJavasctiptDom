let btnRice = document.getElementById("btnRice")
let btnEgg = document.getElementById("btnEgg")
let btnOil = document.getElementById("btnOil")

let btnRiceClickListener = () => {
    alert("terima kasih telah membeli beras")
}

btnRice.addEventListener("click", btnRiceClickListener)

let btnEggClickListener = () => {
    alert("terima kasih telah membeli telur")
}

btnEgg.addEventListener("click", btnEggClickListener)

let btnOilClickListener = () => {
    alert("maaf stok minyak telah habis")
}

btnOil.addEventListener("click", btnOilClickListener)