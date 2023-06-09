var date = new Date();
var todayDateField = document.querySelector('.today-date');
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var todayDate = "Date: 0".concat(day, "-0").concat(month, "-").concat(year);
todayDateField.textContent = todayDate;
