//  ********** ternary-operator-ile-short-if-kullanimi ********

// Eğer kullanıcı adın varsa yazdır, yoksa kullanıcı bilginiz bulanamadı yaz.
let userName = prompt("Kullanıcı bilginizi yazınız")
let info = document.querySelector('#info')


// ternary kullanımı:
// koşul ? doğruysa : yanlışsa

// info.innerHTML = `${userName.length>0? userName : "Kullanıcı Bilginiz Bulunamadı"}`
// info.innerHTML = `${userName? userName : "Kullanıcı Bilginiz Bulunamadı"}`
info.innerHTML = userName? userName : "Kullanıcı Bulunamadı"