import { requestEnum } from "./requests_enums/api_requests.js";

// async function listAllCategories() {
//     const list = await fetch("https://api.chucknorris.io/jokes/categories", {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(e => {
//             console.error(e);
//         })

//     return list;
// }

// async function makeJokeByCategory(category) {
//     const joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`,
//         {
//             method: "GET"
//         })
//         .then(response => response.json)
//         .catch(e => console.error(e));

//     return joke;
// }

// async function makeRandomJoke() {
//     const joke = await fetch("https://api.chucknorris.io/jokes/random", {
//         method: "GET",

//     })
//         .then(response => response.json())
//         .catch(e => { console.error(e); })
//     return joke;
// }

const makeRequest = async (url) => {
    const response = await fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(e => console.error(e));

    return response;
}

const listAllCategories = async ()=>{
    return await makeRequest(requestEnum.listCategories);
}

const makeRandomJoke = async()=>{
    return await makeRequest(requestEnum.randomJoke);
}

const jokeByCategory = async(category)=>{
    return await makeRequest(requestEnum.jokeByCategory(category))
}

export const request = {
    listAllCategories,
    makeRandomJoke,
    jokeByCategory
}


