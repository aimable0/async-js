// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4); 

//HTTP Request

// 1. make request object
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if (request.status === 200 && request.readyState === 4) {
//         console.log(request.responseText);
//     }
// }) 

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

//wrap it into a formular
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.status === 200 && request.readyState === 4) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4) {
                reject("Couldn't fetch the data");
            }
        }) 
        
        request.open('GET', resource);
        request.send();
    })
}
//chaining promises
getTodos('todos/classmates.json').then(data => {
    console.log(data);
    return getTodos('todos/schools.json')
}).then(data => {
    console.log(data);
    return getTodos('todos/todos.json')
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
})

//promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve("some data");
//         //reject("some error")
//     })
// }
// //getSomething().then((data) => {console.log(data)}, (err) => {console.log(err)}) 
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })