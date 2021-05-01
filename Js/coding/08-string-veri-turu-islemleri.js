// ****** String Veri Türü İşlemleri ******
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

//string karakter sayısı -> length
console.log(email.length)

//İlk karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName.charAt(0))


//Büyük Harf  / Küçük Harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> Search
console.log(email.search("@"))
console.log(email[15])


// Belli bir yere kadar al -> slice : 

let DOMAIN = email.slice(email.search("@") +1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.'))
)
// Bilgiyi değiştir -> replace : 
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)


// İstediğim bilgi var mı ? -> includes : 
email.includes('dfggf')// false
let a = email.includes('@') //true
console.log(a)



//İstediğim bilgiyle başladı mı ? bitti mi? -> startsWidth, endsWidth :

email.endsWith('kodluyoruz.org')

// İlk harflerini büyük yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].
    toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)
