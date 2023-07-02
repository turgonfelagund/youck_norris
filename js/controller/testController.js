export let testCounter = 1

export function incCounter() {
    testCounter++
}

export function getCounter() {
    return testCounter
}


window.onload = ()=>{
    if (document.getElementById('htest')) {
        htest.innerHTML = getCounter()   
    }
}

check.onclick= ()=>{
    htest.innerHTML = getCounter()   
    console.log(getCounter());
    testCounter += 1
}