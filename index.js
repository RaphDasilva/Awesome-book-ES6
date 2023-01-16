import { displayList, displayNew, displayContact } from './modules/singlePage.js';
import {
  list, addNew, contact, addBtn, newDate,
} from './modules/variableList.js';
import {
  pushToLocal, showbook, addBook, bookUpload,
} from './modules/functionalitys.js';
import { DateTime } from './modules/luxon.min.js';

list.addEventListener('click', () => {
  displayList();
});

addNew.addEventListener('click', () => {
  displayNew();
});

contact.addEventListener('click', () => {
  displayContact();
});

window.onload = () => {
  showbook();
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  bookUpload();
  pushToLocal();
});

const now = DateTime.now();
newDate.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);