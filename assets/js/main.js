const endDate = "20 January 2024 10:00:00 AM";

document.getElementById("endDate").innerText = endDate;

// Select all input elements & stored into inputs variable
const inputs = document.querySelectorAll("input");


// Create a clock function to get a days, hours, minutes & seconds values.
function clock() {
    const end = new Date(endDate);
    // console.log(`End date is : ${end}`);

    const now = new Date();
    // console.log(`Current date is : ${now}`);

    // This diff is in ms so, we divided by 1000 to convert into sec.
    const diff = (end - now) / 1000;
    // console.log(`Difference is : ${diff}`);

    // Countdown timer never be negative. 
    if (diff < 0) return;

    // Get Days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    // Get Hours
    inputs[1].value = Math.floor((diff / 3600) % 24);

    // Get Minutes
    inputs[2].value = Math.floor((diff / 60) % 60);

    // Get Seconds
    inputs[3].value = Math.floor(diff % 60);

}

// Initial call
clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */


// After every single second function is update.
setInterval(

    () => {
        clock();
    }, 1000

);