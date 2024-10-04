//fetch api

fetch('todos/classmates.json').then((response) => {
    console.log(response);
    //you can also view the content like this.= buttt... 
    // const content = response.json();
    // console.log(content);

    return response.json(); //returns a promise.. which when resolved returns data or error when not.
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

//IMPORTANT NOTES
//even with invalid url.. the fetch will still resolve and will
//only fail when we are offline or can't reach the api other network error..
//mistyping doesn;t result into a rejection..
//erro 404: means resource not found..