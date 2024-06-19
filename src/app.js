import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();
  // render out the books
  renderBookList(bookListEl, books)
  // Add an event listener to the bookList ul.
  bookListEl.addEventListener('click', async (e) => {
    // Check if the clicked element is a button.
    if(e.target.matches('button')) {
      // Get the author information and store it in a constant.
      const author = await getAuthor(e.target.dataset.authorUrlKey);
      // Render the author information :shrug:
      renderAuthorInfo(authorInfoEl, author);
    }
  })
  // Add an event listener to the form.
  newUserFormEl.addEventListener('submit', async (e) => {
    // Stop the form from refreshing the page.
    e.preventDefault();
    // Store the form in a constant for ease of access.
    const form = e.target;
    // Get the data from the form.
    const formData = new FormData(form);
    // Turn the data from the form into an object.
    const formObject = Object.fromEntries(formData);
    // Create the new user using the object with the form data.
    const newUser = await createNewUser(formObject);
    // Render the new user.
    renderNewUser(newUserEl, newUser);
    // Reset the form.
    form.reset();
  })
}
