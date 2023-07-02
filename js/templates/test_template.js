//Template use example 
const templateContent = testT.content;
const templateClone = templateContent.cloneNode(true);

let counter = 0;

function getCounter() {
    return counter;
}

if (document.getElementById('check')) {
    check.onclick = () => {
        //Append the content of the cloned template to the body
        document.body.appendChild(templateClone)
        contador++;
        //Render the cloned template with update variable
        htest.innerHTML = getContador();
    }
}


//Remove the template from index.html
testT.remove()