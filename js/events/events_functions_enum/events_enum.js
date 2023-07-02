import { controller } from "../../controller/categories_requests_manager.js";
import { createMainContent } from "../../controller/user_request_manager.js";
import { prepareForm } from "../../templates/form_template.js";

//This is just to change the function of the filter input based on current content

//For the moment it only exist 1 type of content to filter, but this content may be expanded in the future
export const filterEventFunctions = Object.freeze({
    categories: (categoryName) => {
        controller.filterCategories(categoryName)
    },
    test2: () => { console.log('evento 2'); } //Only for test purposes
});


export const eventFunctions = Object.freeze({
    makeJoke: () => {
        joke.addEventListener('click', () => {
            controller.getJoke({ byCategory: false });
        })
    },

    makeJokeByCategory: () => {
        const cells = document.getElementsByTagName('td');

        Array.from(cells).forEach(cell => {
            cell.onclick = (e) => {
                controller.getJoke({ categoryName: e.target.innerText, byCategory: true });
            }
        });
    },

    loadCategories: () => {
        category.addEventListener('click', () => {
            controller.loadCategories();
        })
    },

    confirmUser: () => {
        check.addEventListener('click', (e) => {
            createMainContent();
        })
        userInput.addEventListener('keydown', (e)=>{
            e.key === 'Enter' ? (e.preventDefault(), createMainContent()) : null;
        })
    },

    changeUser : ()=>{
        newName.onclick = ()=>{
            prepareForm();
        }
    }
})