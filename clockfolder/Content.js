let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
];
function ticks() {
    const dateOutPut = document.getElementById("date");
    const timeOutPut = document.getElementById("time");
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    const day = currentDate.getDay();
    const dayInStr = weekdays[day];

    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const second = String(currentDate.getSeconds()).padStart(2, "0");

    dateOutPut.innerText = `${year}-${month}-${date} : ${dayInStr}`;
    timeOutPut.innerHTML = `${hour}: ${minute}: ${second}`;
}

setInterval(ticks, 1000);
