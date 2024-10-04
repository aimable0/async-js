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
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.status === 200 && request.readyState === 4) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('Couldnt fetch data', undefined);
        }
    }) 
    
    request.open('GET', resource);
    request.send();
}

//promise example

const getSomething = () => {

    return new Promise(); //something that takes some times to do.
}



