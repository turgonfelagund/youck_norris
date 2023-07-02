
export const requestEnum = Object.freeze({
    listCategories : "https://api.chucknorris.io/jokes/categories",
    randomJoke : "https://api.chucknorris.io/jokes/random",
    jokeByCategory : (category)=>`https://api.chucknorris.io/jokes/random?category=${category}`,
})