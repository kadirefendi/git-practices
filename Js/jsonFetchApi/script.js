/*
fetch('https://sozluk.gov.tr/atasozu')
  .then((res) => res.json())
  .then((veri) => console.log(veri))
*/

//Giriş ve çıkış için kullanılacak HTML nesnelerini değişkenlere alalım.
const sonuc = document.getElementById('sonuc')
const aramaKutusu = document.getElementById('aramaKutusu')
const aramaListesi = document.getElementById('aramaListesi')

//JSON kaynağından aldığımız verileri sayfada tutmak için dizi değişkenleri oluşturalım.
const anahtarKelimeler = []
const deyimlerSozler = []

verileriYukle()

async function verileriYukle() {
  const sunucuYaniti = await fetch('https://sozluk.gov.tr/atasozu')
  let veriler = await sunucuYaniti.json()
  console.log(veriler)

  veriler.forEach((eleman) => {
    anahtarKelimeler.push(eleman.anahtar)
    deyimlerSozler.push(eleman.sozum)
  })

  const birlesmisKelimeler = [...new Set(anahtarKelimeler)]
  console.log(birlesmisKelimeler)

  birlesmisKelimeler.sort(() => Math.random() - 0.5)
  let sayac = 0
  birlesmisKelimeler.forEach((kelime) => {
    if (sayac < 5) {
      const yeniOneri = document.createElement('option')
      aramaListesi.appendChild(yeniOneri)
      yeniOneri.value = kelime
    }
    sayac++
  })
}

aramaKutusu.addEventListener('input', (e) => {
  sonuclariFiltrele(e.target.value)
})

function sonuclariFiltrele(arananKelime) {
  sonuc.innerHTML = ''
  const aramaKriteri = new RegExp(arananKelime, 'gi')
  let eslesenler = deyimlerSozler.filter((soz) => aramaKriteri.test(soz))

  if (arananKelime.length < 3) {
    eslesenler = []
  }

  eslesenler.forEach((es) => {
    const siradakiSonuc = document.createElement('li')
    sonuc.appendChild(siradakiSonuc)
    siradakiSonuc.innerHTML = es
  })
}
