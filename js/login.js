let btnLogin = document.getElementById("btnLogin")
let form = document.getElementById('form-login')
let authentication = () => {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username == "user" && password == "user") {
        alert(`Selamat Datang ${username}`)
        // window.location.href = 'catBarang.html';
        // document.location.href = 'catBarang.html', true
        window.open('catBarang.html')   
        form.reset();
    } else {
        alert("Username atau password yang ada masukkan salah")
        form.reset();
    }
}

// let pindah = () =>{
//     window.location.href = 'catBarang.html', true
//     window.open('catBarang.html')
//     return false
// }

btnLogin.addEventListener("click", authentication)