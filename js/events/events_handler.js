import { filterEventFunctions, eventFunctions } from "./events_functions_enum/events_enum.js";



//Change the event of the filter based on the selected option form the menu
function handleEventsOfFilter(functionForFilter) {
    filter.value = '';
    const filterEvent = filter.onkeyup;

    filter.removeEventListener('keyup', filterEvent);

    return filter.onkeyup = (e) => {
        filterEventFunctions[functionForFilter](e.target.value)
    }
}

//Load a random Joke from the API
const makeJoke = () => eventFunctions.makeJoke();

//Load a random joke from the API based on a category
export const makeJokeByCategory = () => eventFunctions.makeJokeByCategory();


//Load de available categories from the API and create a table with them
const loadCategories = () => {
    eventFunctions.loadCategories();
    //atach the event function by it's name
    handleEventsOfFilter("categories");
}


export const confirmUser = () => eventFunctions.confirmUser()


const changeUser = () => {eventFunctions.changeUser()}

export const execEvents = () => {
    makeJoke();
    loadCategories();
    changeUser();
    //Asign an event to the filter when window loads
    handleEventsOfFilter("categories");
}