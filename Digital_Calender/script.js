let date = new Date();    // constructor

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"];


document.getElementById("date").innerHTML = date.getDate();
document.getElementById("day").innerHTML = days[date.getDay()];
document.getElementById("month").innerHTML = months[date.getMonth()];
document.getElementById("year").innerHTML = date.getFullYear();