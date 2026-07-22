/*=========================================
            OVMUN COUNTDOWN
=========================================*/

/*
============================================

    CHANGE ONLY THIS DATE

    Format:
    Year, Month (0-11), Day, Hour, Minute, Second

    Example:
    new Date(2027, 2, 14, 9, 0, 0)

============================================
*/

const conferenceDate = new Date(
    2027,
    0,
    1,
    9,
    0,
    0
);

/*=========================================*/

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date();

    const distance = conferenceDate - now;

    if (distance <= 0) {

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        clearInterval(countdownInterval);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    daysElement.textContent = String(days).padStart(3, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);