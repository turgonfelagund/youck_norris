import { request } from "../requests/jokes_requests.js";
import { userController } from "./user_request_manager.js";
import { makeJokeByCategory } from "../events/events_handler.js";

export let allCategories = null;

async function getJoke({categoryName, byCategory = false}) {
    let joke;

    !byCategory ? joke = await request.makeRandomJoke() : joke = await request.jokeByCategory(categoryName);

    const modifiedJoke = joke.value.replace(/Chuck/g, userController.getUserName);
    document.getElementById("mainContainer").innerHTML = `<div class="joke"><p>${modifiedJoke}</p></div>`;
}

async function loadCategories(filter = false, filteredCategories = null) {
    let table = document.getElementById('tabla');
    let categoriesArr;

    allCategories ??= await request.listAllCategories();

    !filter ? categoriesArr = allCategories : categoriesArr = filteredCategories;

    if (document.querySelectorAll('tr').length == categoriesArr.length) return;

    if (!table) {
        table = document.createElement('table');
        table.id = "tabla";
        table.className = "table";
    }

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    for (let i = 0; i < categoriesArr.length; i++) {
        const row = document.createElement('tr');
        row.className = "categoryRow"
        const cell = document.createElement('td');
        cell.className = 'categoryCell'
        cell.innerHTML = categoriesArr[i]
        row.appendChild(cell)
        table.appendChild(row);
    }

    const firstChild = document.getElementById('mainContainer').firstChild;
    mainContainer.replaceChild(table, firstChild);
    makeJokeByCategory();
}

function filterCategories(categoryName) {

    if (categoryName.length === 0) {
        loadCategories();
    } else {
        const filteredCategories = allCategories.filter(i => i.startsWith(categoryName));

        loadCategories(true, filteredCategories)
    }

}

export const controller = {
    renderRandomJoke: getJoke,
    loadCategories,
    filterCategories,
    getJoke
}