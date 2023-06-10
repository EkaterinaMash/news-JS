const date = new Date();
const todayDateField = document.querySelector('.today-date');

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const todayDate = `Date: 0${day}-0${month}-${year}`;

todayDateField.textContent = todayDate;
