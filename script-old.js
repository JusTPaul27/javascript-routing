changePage(window.location.hash);

window.addEventListener('hashchange', () => changePage(window.location.hash));

function changePage(hash) {
    // const container = document.getElementById('page-container')
    switch (hash) {
        case '#/about':
            // document.innerHTML = '<h1> About </h1>'
            displayPage('about');
            break;

        case '#/gallery':
            // document.innerHTML = '<h1> Gallery </h1>'
            displayPage('gallery')
            break;

        case '#/contacts':
            // document.innerHTML = '<h1> Contacts </h1>'
            displayPage('contacts')
            break;

        default:
            // document.innerHTML = '<h1> HOME </h1>'
            // container.innerHTML = Home.render()
            displayPage('home')
            break;
    }
}

function displayPage(pageId) {
    const container = document.getElementById('page-container');
    const arrayOfChildren = [...container.children];
    for (const child of arrayOfChildren) {
        child.style.display = 'none';
    }

    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
}