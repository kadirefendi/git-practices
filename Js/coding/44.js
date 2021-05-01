// fetch api ali çalışmak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// fetch("data/settings.json").then(res => {
//     return res.json()
// }).then(resJson => {
//     console.log(resJson);
//     console.log(resJson.userName);
// })

// fetch("http://api.mocki.io/v1/b043df5a", {mdoe: no-cors}).then(
//     response => response.json()
// ).then(resJson => console.log(resJson))

// let userListDOM = document.querySelector('#userList')
// // let fullName = prompt()
// let ekle = "bu bir eklemedir"

// fetch('https://jsonplaceholder.cypress.io/posts')
//   .then(response => response.json())
//     .then(resJson => {
//         resJson.forEach(item => {
//             let liDOM = document.createElement('li')
//             liDOM.innerHTML = item.title
//             userListDOM.appendChild(liDOM)
//         })
//     }
//     )

// fetch('data/postTen.json')
//     .then(res => res.json())
//     .then(resJson => {
//         resJson.forEach(item => {
//            // console.log(item.body) 
//             let liDOM = document.createElement('li')
//             liDOM.innerHTML = item.body
//             userListDOM.appendChild(liDOM)
//         });
//     })

const data = {username: 'example'}
fetch('data/postTen.json', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data)
    })
    .catch((error) => {
        console.error('Error:', error)
    })