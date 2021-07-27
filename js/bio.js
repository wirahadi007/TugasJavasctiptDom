let btnSubmit = document.getElementById("btnSubmit")

let btnSubmitListener = () => {
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let dateOfBirth = document.getElementById("dateOfBirth").value
    let gender
    if (document.getElementById("pria").checked) {
        gender = document.getElementById("pria").value
    } else if (document.getElementById("wanita").checked){
        gender = document.getElementById("wanita").value
    } else {
        gender = ""
    }
    let lastEducation = document.getElementById("lastEducation").value

    alert(`
    Nama: ${name}    
    Alamat: ${address}
    Tanggal Lahir: ${dateOfBirth}
    Jenis Kelamin: ${gender}
    Pendidikan Terakhir: ${lastEducation}
    `)
}

btnSubmit.addEventListener("click", btnSubmitListener)