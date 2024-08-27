

let breathsCount = 0;
let sessionStarted = false;
let sessionSeconds = 0;
let intervalId = 0;

let timeBetweenBreaths = 0;

const countButton = document.getElementById("countButton");
const countOutput = document.getElementById("countOutput");

document.getElementById("container").style.textAlign = "center";

document.addEventListener("keypress", (press) => {
    if (press.code == "Space" ) {
        countBreath();
    }
});

let dotsCount = 0;

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
    

    let incrementingDots = ".";
    switch (dotsCount) {
        case 0 :
            incrementingDots = ".";
            break;
        case 1 :
            incrementingDots = "..";
            break;
        case 2 :
            incrementingDots = "...";
            break;
    }
    dotsCount += 1;
    if (dotsCount == 3) {
        dotsCount = 0;
    }
    

    countOutput.innerText = "Breaths: " + breathsCount.toString() + timeBetweenString + " seconds" + incrementingDots;
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