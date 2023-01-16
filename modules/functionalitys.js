import { bookContainer, bookTitle, bookAuthor } from './variableList.js';

let bookList = [];

const bookUpload = () => {
  bookContainer.innerHTML = '';
  bookList.forEach((books) => {
    bookContainer.innerHTML += `
          <div class="book-wrapper">
          <div class="book-info">
          <p>"${books.title}"</p>
          <p>by</p>
          <p>${books.author}</p>
          </div>
          <button id='delete' class= "delete-btn" data-id="${books.id}">Remove</button>
          </div>
         `;
    bookTitle.value = '';
    bookAuthor.value = '';
  });
  const bookRemoveBtn = document.querySelectorAll('.delete-btn');

  bookRemoveBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSet = parseInt(button.dataset.id, 10);
      const buttonId = bookList.findIndex((object) => object.id === dataSet);
      const deleted = (index) => {
        bookList.splice(index, 1);
        bookUpload();
        localStorage.setItem('bookList', JSON.stringify(bookList));
      };
      deleted(buttonId);
    });
  });
};

const addBook = () => {
  const books = {};
  books.id = bookList.length;
  books.title = bookTitle.value;
  books.author = bookAuthor.value;
  bookList.push(books);
};

const showbook = () => {
  if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
  bookUpload();
};

const pushToLocal = () => {
  localStorage.setItem('bookList', JSON.stringify(bookList));
};

export {
  pushToLocal, showbook, addBook, bookUpload,
};
