let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + ", " + d.getDate() + ", " + year;
let daything = dayName + ", " + d.getDate() + " " + monthName + " " + year;

document.getElementById('daything').textContent = daything;

document.getElementById("currentdate").textContent = fulldate;

document.querySelector("#thisyear").innerHTML = year;

// ******************
try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById(
        "currentdate"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Error with code or your browser does not support locale");
};

function toggleMenu() {
    document.getElementById('priNav').classList.toggle("open");
    document.getElementById('burger').classList.toggle("open");
};

const x = document.getElementById('burger');
x.onclick = toggleMenu;


const body = document.querySelector('body');

const announcement = document.getElementById('announcement');


function meeting() {
    if (dayName == "Monday") {
        console.log("today is a monday! displaying the announcement");
        announcement.style.display = "block";
    } else if (dayName == "Tuesday") {
        console.log("today is a tuesday! displaying the announcement");
        announcement.style.display = "block";
    } else {
        console.log("wait for next week for announcement");
        announcement.style.display = "none";
    }
};

meeting();