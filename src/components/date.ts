const date = new Date();
const todayDateField = document.querySelector('.today-date');

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const todayDate = `Date: 0${day}-0${month}-${year}`;

todayDateField.textContent = todayDate;