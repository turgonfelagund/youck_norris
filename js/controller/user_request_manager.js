import { prepareTemplateAndEvents } from "../templates/main_content_template.js";

let userName;

const selectNameAndDestroyForm = () => {
    userName = document.getElementsByName('user')[0].value;
    formDiv.remove();
}

export const createMainContent = () => {
    selectNameAndDestroyForm();
    prepareTemplateAndEvents(getUserName());
}

const getUserName = () => {
    userName = userName.trim();
    return userName.length === 0 ? 'Chuck' : userName;
}

export const userController = {
    getUserName,
}