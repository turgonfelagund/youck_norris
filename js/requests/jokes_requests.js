import { requestEnum } from "./requests_enums/api_requests.js";

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


