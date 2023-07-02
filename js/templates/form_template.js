import { confirmUser } from "../events/events_handler.js";

const templateContent = formTemplate.content;
export let templateClone = templateContent.cloneNode(true);

const setInput = () => {
    const userInput = document.getElementsByName('user')[0];
    userInput.value = '';
}

export const prepareForm = () => {
    App.remove();
    templateClone = templateContent.cloneNode(true);
    body.appendChild(templateClone);
    
    confirmUser();
    setInput();

}

window.addEventListener('load',
    () => {
        //remove form template
        formTemplate.remove();
        body.appendChild(templateClone);
        
        //Remove template
        mainContent.remove();

        setInput();

        confirmUser()

    },
    { capture: true }
);