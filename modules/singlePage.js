const displayList = () => {
  document.getElementById('Book-list').classList.add('block');
  document.getElementById('Add-new').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
};
const displayNew = () => {
  document.getElementById('Add-new').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
};
const displayContact = () => {
  document.getElementById('contact').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('Add-new').classList.remove('block');
};

export { displayList, displayNew, displayContact };