const date: Date = new Date();
const todayDateField: HTMLElement = document.querySelector('.today-date');

const day: number = date.getDate();
const month: number = date.getMonth() + 1;
const year: number = date.getFullYear();

const todayDate = `Date: ${day}-0${month}-${year}`;

todayDateField.textContent = todayDate;
