let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price, 
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "Fiyat:", total
    )

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi", Number("111") )    

//arttırma ve azaltma işlemleri
let counter = 320
counter = counter + 1 // uzun yöntem
counter += 1
counter ++
console.log(counter)

counter --
counter += 1
console.log(counter)

counter *=10
console.log(counter)

counter /=2
console.log(counter)

//işlem önceliği
console.log( 2 + 3 * 10)  //32
console.log( (2 + 3) * 10)  //32

// mod (kalan) alma %
//sayı tek mi çift mi? 
console.log(14 % 2)

// 8 ürün alan koliye tüm ürünler sığıyor mu ? 
console.log("Koli Kalan Ürün Örneği:", 18 % 8)

// Üs alma Örneği
console.log(2*2*2*2)
console.log(2**4)

//asağı yuvarlama işlemi -> Math.floor:
console.log("Aşağı Yuvarlama", Math.floor(1.9)) // -> 1

//yukarı yuvarlama işlemi -> Math.ceil:
console.log("Yukarı Yuvarlama:", Math.ceil(1.1)) // -> 2

//yakına yuvarlama işlemi -> Math.round: 
console.log("Yakına Yuvarlama: ", Math.round(1.49)) // -> 1.5 aşağısı aşağı yuvarlar
