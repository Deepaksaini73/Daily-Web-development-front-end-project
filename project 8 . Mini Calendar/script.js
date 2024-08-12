let date= document.querySelector('.date');
let day= document.querySelector('.day');
let month= document.querySelector('.month');
let year= document.querySelector('.year');

let now= new Date();

let currentDay=now.getDay();
let currentMonth=now.getMonth();

switch(currentDay){
    case 1: currentDay="Monday";
    break;
    case 2: currentDay="Tuesday";
    break;
    case 3: currentDay="Wednesday";
    break;
    case 4: currentDay="Thursday";
    break;
    case 5: currentDay="Friday";
    break;
    case 6: currentDay="Saturday";
    break;
    case 7: currentDay="Sunday";
    break;
    default: break;
}
switch(currentMonth){
    case 1: currentMonth="Januray";
    break;
    case 2: currentMonth="Februray";
    break;
    case 3: currentMonth="March";
    break;
    case 4: currentMonth="April";
    break;
    case 5: currentMonth="May";
    break;
    case 6: currentMonth="June";
    break;
    case 7: currentMonth="July";
    break;
    case 8: currentMonth="August";
    break;
    case 9: currentMonth="September";
    break;
    case 10: currentMonth="October";
    break;
    case 11: currentMonth="November";
    break;
    case 12: currentMonth="December";
    break;
    default: break;
}

date.textContent=now.getDate();
day.textContent=currentDay;
month.textContent=currentMonth;
year.textContent=now.getFullYear();
