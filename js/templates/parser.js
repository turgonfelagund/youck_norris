//Simple and generic example of DOMparser use
//This is not used in the developement
const parser = new DOMParser();

const baseRoute = "./js/templates/"

export const parseDoc = async (htmlView) => {

    const documentView = await fetch(`${baseRoute}/${htmlView}`, {
        
    })
        .then(data => data.text())
        .catch(e => { throw new Error("There was an error during parsing") })

    //Resolve the absolute route of the file

    const doc = parser.parseFromString(documentView, "text/html");

    const viewContent = doc.body.innerHTML;
    
    const mainContainer = document.getElementById('App');

    //mainContainer.appendChild(viewContent);
    mainContainer.innerHTML += viewContent
    
}