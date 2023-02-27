let val;

const today = new Date(); //Gives current date by default
let birthday = new Date('9-10-1981 09:25:03');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); //March
birthday.setDate(12); //March 12th
birthday.setFullYear(1985);
birthday.setHours(3); //3
birthday.setMinutes(30); // 3:30
birthday.setSeconds();
birthday.setMilliseconds();


val = birthday;

console.log(val);