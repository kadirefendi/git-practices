// ** İlk Fonksiyonumuzu Tanımlamak:


function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}

// function userCheck() {
//     if (userName && age >= 18) {
//     info.innerHTML = "Ehliyet Alabilirsiniz."
//     } else if (!userName) {
//     info.innerHTML = "Kullanıcı Adınız Yok"
//     } else if (!(age >= 18)) {
//     info.innerHTML = "Yaş bilginiz yok veya 18 yaşından küçüksünüz"
//     }
// }


hello() // Çalıştır
