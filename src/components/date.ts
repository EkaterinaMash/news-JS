const date: Date = new Date();
const todayDateField = document.querySelector('.today-date');

if (todayDateField) {
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();

    todayDateField.textContent = `Date: ${day}-0${month}-${year}`;
}
