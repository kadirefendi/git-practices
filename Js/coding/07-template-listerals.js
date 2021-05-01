// ******* Template Literals Kullanımı *******
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
//console.log("Merhaba", username, "Sitemize Hoşgeldin", "mail adresin:", email)

let info = `Merhaba ${username} sitemize hoşgeldin.. 
mail adresin ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
Günün Saat Bilgisi: ${new Date().getHours()}
Kısa isminiz ${username[0]}.
`
console.log(info)