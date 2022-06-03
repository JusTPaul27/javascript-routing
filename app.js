let pages = []

const worker = new Worker('./myWorker.js');

worker.addEventListener('message', logMessageFromWorker);

function logMessageFromWorker(message) {
    console.log('Messaggio ricevuto dal worker: ', message.data);
}

function loadedPages() {
    fetch("./pages.json")
    .then(response => response.json())
    .then(result => displayPages(result));
}



function displayPages(loadedPages) {

    pages = loadedPages;
    const navMenu = document.getElementById('nav-menu');

    for (const page of pages) {
        const a = document.createElement('a');
        const node = document.createTextNode(page.name);
        a.appendChild(node);
        a.href = "/#/" + page.id;
        navMenu.appendChild(a);
    }

    changePage(window.location.hash);

    // const firstPage = pages[0];

    // const container = document.getElementById("page-container");

    // container.innerHTML = firstPage.html;
}

window.addEventListener('hashchange', () => changePage(window.location.hash));


function changePage(hash) {

let id = hash.replace('#/', '');  

if (id === '') {
    id = 'home';
}

let selectedPage;

for (const page of pages) {
    if (page.id === id) {
        selectedPage = page;
        break;
    }
}

const container = document.getElementById("page-container");

container.innerHTML = selectedPage.html;
}

function activateWorker() {
    worker.postMessage('Ciao finto lavoratore')
}


loadedPages();