

let breathsCount = 0;
let sessionStarted = false;
let sessionSeconds = 0;
let intervalId = 0;

let timeBetweenBreaths = 0;

const countButton = document.getElementById("countButton");
const countOutput = document.getElementById("countOutput");


document.addEventListener("keypress", (press) => {
    if (press.code == "Space" ) {
        countBreath();
    }
});

function countBreath() {
    if (!sessionStarted) {
        intervalId = setInterval(() => {
            sessionSeconds += 1;
            timeBetweenBreaths += 1;
            document.getElementById("totalTime").innerText = "Total session time: " + getTimeString(sessionSeconds);

        }, 1000);
        sessionStarted = true;
    }

    breathsCount += 1;
    let timeBetweenString = "\nTime Between Breaths: " + timeBetweenBreaths.toString();
    countOutput.innerText = "Breaths: " + breathsCount.toString() + timeBetweenString + " seconds";
    countButton.style.backgroundColor = "green";
    timeBetweenBreaths = 0;

    setTimeout(() => {
        countButton.style.backgroundColor = "pink";
    }, 200);
}

function endSession() {
    if (!sessionStarted) {
        return;
    }
    clearInterval(intervalId);
    sessionStarted = false;
    breathsCount = 0;
    sessionSeconds = 0;
    timeBetweenBreaths = 0;
    countOutput.innerText = countOutput.innerText + "\nGreat job for this session!"
    
}

function getTimeString(sec) {
    let mins = parseInt((sec / 60));
    let seconds = (sec - mins * 60).toString();
    if (parseInt(mins) < 10) {
        mins = "0" + mins;
    }
    if (parseInt(seconds) < 10) {
        seconds = "0" + seconds;
    }
    return mins + ":" + seconds;
}