// ********** Koşullarla Çalışmak *********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

let username = prompt("kullanici adinizi giriniz.")
// Eğer kullanıcı bilgisi varsa ekrana yazdır
// Eğer (username.length > 0 {console.log(username)}) değilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// if (username.lentgh > 0) { console.log(username) }
if (username.length > 0) { // if kısmı her zaman true ise çalışır. 
    console.log(`Kullanıcı Adı: ${username}`)
} else {
    console.log("bilgi yok")
}