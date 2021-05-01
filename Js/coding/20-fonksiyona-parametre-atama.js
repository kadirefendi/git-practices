// **** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geri Dönüş Almak ****

// Temel Kurallar : 
// 1: Bir Fonksiyon, bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: Bir Fonksiyon, dışarı bilgi gönderebilir(return) veya göndermeyebilir
// 3: Mümkünse Fonksiyonun bağımlılıklarını azaltmak gerekir

let firstName = "Lorem"

function greetings(firstName="", lastName="") { // default parametre alıyor
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    // console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 


console.log(firstName) // değiişken
greetings() // fonksiyona parametre göndermedik
// let info = greetings("Parametre")
// console.log(info)

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// //let info = "deneme" // ?????
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">COLOR RED</span>`

domIdWriteInfo('greeting', htmlInfo)
// domIdWriteInfo('greeting', greetingsInfo) 2. seçeenek
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))