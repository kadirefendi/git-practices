// ********** Çoklu Koşullarla Çalışmak *********

let userName = prompt("Kullanıcı Adınız: ")
let age = prompt("Yaşınız:")
let info = document.querySelector('#info')

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet Alabilirsiniz."
} else if (!userName) {
    info.innerHTML = "Kullanıcı Adınız Yok"
} else if (!(age >= 18)) {
    info.innerHTML = "Yaş bilginiz yok veya 18 yaşından küçüksünüz"
}