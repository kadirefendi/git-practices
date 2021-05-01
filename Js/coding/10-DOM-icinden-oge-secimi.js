// ***** DOM içinden öğe seçimi ****

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
console.log(link.innerHTML)
link.innerHTML = "Link Bilgisi değişti"

let kod = document.querySelector("#kodluyoruzLink")
kod.innerHTML += "degiştirelim"
kod.style.color = "red"
kod.classList.add('btn')
