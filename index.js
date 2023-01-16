import {displayList, displayNew, displayContact} from './modules/singlePage.js';
import {list,addNew,contact,addBtn} from './modules/variableList.js';
import {pushToLocal, showbook, addBook, bookUpload,} from './modules/functionalitys.js';


list.addEventListener('click', () =>{
    displayList();
});

addNew.addEventListener('click', () =>{
    displayNew();
});

contact.addEventListener('click', () =>{
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

