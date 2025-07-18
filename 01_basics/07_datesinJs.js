// ============================Dates in JavaScript============================

// 🧱 1. Creating Dates
const now = new Date(); // current date and time

const specificDate = new Date("2025-07-18"); // using string
const customDate = new Date(2025, 6, 18, 10, 30); // (YYYY, MM-0, DD, hh, mm)


// ⏱️ 3. Formatting Date & Time (Interview Tip)
console.log(now.toString());          // "Fri Jul 18 2025 10:30:45 GMT+0530"
console.log(now.toDateString());     // "Fri Jul 18 2025"
console.log(now.toTimeString());     // "10:30:45 GMT+0530"
console.log(now.toISOString());      // "2025-07-18T05:00:00.000Z"
console.log(now.toLocaleDateString());// "18/7/2025" (based on locale)
console.log(now.toLocaleTimeString());// "10:30:45 am" (based on locale)
console.log(now.toLocaleString());   // "18/7/2025, 10:30:45 am" (based on locale)
// Custom formatting
console.log(now.getFullYear());      // 2025
console.log(now.getMonth() + 1);    // 7 (0-based, so +1)
console.log(now.getDate());         // 18
console.log(now.getHours());        // 10
console.log(now.getMinutes());      // 30
console.log(now.getSeconds());      // 45
console.log(now.getMilliseconds()); // 0

// 🔄 4. Date Manipulation
const d = new Date();
d.setFullYear(2030);
d.setMonth(11); // December
d.setDate(25);
console.log(d.toDateString()); // "Wed Dec 25 2030"



// 🗓️ 5. Date Comparison
const start = new Date("2025-01-01");
const end = new Date("2025-12-31");

const diffMs = end - start; // difference in milliseconds
const diffDays = diffMs / (1000 * 60 * 60 * 24); // convert to days
console.log(`Days between: ${diffDays}`); // 364

console.log(start < end); // true
console.log(start.getTime() === end.getTime()); // false


// 🕒 6. Date equality
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

console.log(isSameDay(now, d)); // false

// 🗓️ 7. Locale-Specific Formatting
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
console.log(now.toLocaleString('in-IN', options));














// -----------------------------------------------------------------------------------------------------
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

