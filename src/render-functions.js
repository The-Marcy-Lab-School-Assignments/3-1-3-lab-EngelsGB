export const renderBookList = (bookListEl, books) => {
    // Empty the given ul element.
    bookListEl.innerHTML = '';
    // Iterate through the array of books.
    for (const book of books) {
        // Create the li that will parent the book information.
        const li = document.createElement('li');
        // Create an img tag for the book cover.
        const img = document.createElement('img');
        // Link the url of the book cover to the img tag and give it an alt text.
        img.src = book.coverUrl;
        img.alt = `An old cover of ${book.title}`;
        // Create the p tag for the book title and give its text content.
        const p = document.createElement('p');
        p.textContent = `Title: ${book.title}`;
        // Create a button tag and give it both the text content and the url to the author's information.
        const button = document.createElement('button');
        button.textContent = `View ${book.author.name}`;
        button.dataset.authorUrlKey = book.author.urlKey;
        // Append all the book info elements to the li and then the li to the ul.
        li.append(img, p, button);
        bookListEl.append(li);
    }
}

export const renderAuthorInfo = (authorInfoEl, author) => {
    // Change the innerHTML of the div with the same format as the readme.
    authorInfoEl.innerHTML = `
    <h2>${author.name}</h2>
    <img src='${author.pictureUrl}' alt='A picture of ${author.name}'>
    <p>Born: ${author.birthDate}</p>
    <p>${author.bio}</p>
    <a href='${author.wikipediaUrl}'>Wikipedia Link</a>
    `;
}

export const renderNewUserForm = (newUserFormEl) => {
    // Change the innerHTML of the div with the same format as the readme.
    newUserFormEl.innerHTML = `
    <label for='username'>Username</label>
    <input id='username' name='username'>
    <label for='is-cool'>Is this user cool?</label>
    <input id='is-cool' name='isCool' type='checkbox'>
    <label for='favorite-language'>Favorite Language</label>
    <select id='favorite-language' name='favoriteLanguage'>
        <option value='None'>None</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='Python'>Python</option>
        <option value='Ruby'>Ruby</option>
    </select>
    <button>Create User</button>
    `;
}

export const renderNewUser = (newUserEl, newUser) => {
    // Empty the given div element.
    newUserEl.innerHTML = '';
    // Create the h2 element and set its textContent and user id.
    const h2 = document.createElement('h2');
    h2.textContent = newUser.username;
    h2.dataset.userId = newUser.id;
    // Create the first p element and set its textContent depending on the checkbox input.
    const p = document.createElement('p');
    if (newUser.isCool) p.textContent = 'The hippest in the house!';
    else p.textContent = 'A real square.';
    // Create the second p element and set its textContent
    const p2 = document.createElement('p');
    p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;
    // Append all previously created elements to the given div.
    newUserEl.append(h2, p, p2);
}