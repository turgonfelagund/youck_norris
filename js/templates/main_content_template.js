import { controller } from "../controller/categories_requests_manager.js";
import { execEvents } from "../events/events_handler.js";

const templateContent = mainContent.content;
let clonedTemplate = templateContent.cloneNode(true);

const setFilterInput = () => {
    filter.value = '';
}


export const prepareTemplateAndEvents = async (userName)=>{
    clonedTemplate = templateContent.cloneNode(true);

    body.appendChild(clonedTemplate);
    document.getElementById('greeting').textContent = `Welcome ${userName}`

    setFilterInput();

    await controller.loadCategories();

    execEvents();

}