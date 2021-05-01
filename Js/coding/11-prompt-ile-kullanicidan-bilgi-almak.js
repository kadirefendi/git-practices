// ********* prompt ile Kullanıcıdan bilgi almak *****
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lütfen Adınızı Giriniz: ")
console.log(fullName)

let greeting = document.querySelector('#greeting')

greeting.innerHTML =` ${greeting.innerHTML} <small style="color:red">${fullName}</small>`