
const timeOutput = document.getElementById("timeOutput");     
const totalAccTimeOutput = document.getElementById("totalTime");   

// secCount is used in all the breathing exercise functions.
// totalAccTime (total accumulated time for session time str)
let secCount = 1;
let breathIn = true;
let totalAccTime = 0;
let intervalId = 0;

function isFreshStart() {
    return intervalId === 0;
}

function updateSessionTimeStr(time) {
    totalAccTimeOutput.innerText = "Total Session Time: " + getTimeString(time); 
}

function startEvenBreathing() {
    if (!isFreshStart()) {
        return;
    }
    timeOutput.innerText = "Inhale... " + secCount.toString();
    
    intervalId = setInterval(() => {
        secCount += 1;        
        if (breathIn) {
            timeOutput.innerText = "Inhale... " + secCount.toString();
        } else {
            timeOutput.innerText = "Exhale... " + secCount.toString();
        }
        if (secCount % 4 == 0) {
            breathIn = !breathIn;
            secCount = 0;
        }
        totalAccTime += 1;
        updateSessionTimeStr(totalAccTime);

    }, 1000);

    evenStarted = true;
    toggleButtonDeactivate();
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

const boxBreathingSteps = ["Inhale...", "Gentle Hold...", "Exhale...", "Gentle Hold..."];
let sequenceStep = 0;

function endSession() {
    if (isFreshStart()) {
        return;
    }
    clearInterval(intervalId);
    breathIn = true;
    timeOutput.innerText = "Session complete, good job!";
    secCount = 1;
    sequenceStep = 0;
    currentFourSevenStep = 0;
    intervalId = 0;
    toggleButtonDeactivate();
}

function resetSessionTime() {
    totalAccTime = 0;
    updateSessionTimeStr(totalAccTime);
}

function startBoxBreathing() {
    if (!isFreshStart()) {
        return;
    }
    timeOutput.innerText = boxBreathingSteps[sequenceStep] + secCount.toString();
    
    intervalId = setInterval(() => {
        secCount += 1;
        
        timeOutput.innerText = boxBreathingSteps[sequenceStep] + secCount.toString();
        
        if (secCount % 4 == 0) {
            secCount = 0;
            sequenceStep += 1;
            if (sequenceStep == boxBreathingSteps.length) {
                sequenceStep = 0;
            }
        }
        totalAccTime += 1;
        updateSessionTimeStr(totalAccTime);
    }, 1000);

    toggleButtonDeactivate();
}

const fourSevenEightSteps = ["Inhale...", "Gentle Hold...", "Exhale.."];
const steps = [4, 7, 8];
let currentFourSevenStep = 0;

function startFourSevenEight() {
    if (!isFreshStart()) {
        return;
    }
    timeOutput.innerText = fourSevenEightSteps[currentFourSevenStep] + secCount.toString();
    intervalId = setInterval(() => {
        secCount += 1;
        
        timeOutput.innerText = fourSevenEightSteps[currentFourSevenStep] + secCount.toString();
        
        if (secCount == steps[currentFourSevenStep]) {
           
            secCount = 0;
            currentFourSevenStep += 1;
            if (currentFourSevenStep == steps.length) {
                currentFourSevenStep = 0;
            }
            
        }
        totalAccTime += 1;
        updateSessionTimeStr(totalAccTime);

    }, 1000);
    
    toggleButtonDeactivate();
}

function startStopwatch() {
    updateSessionTimeStr(totalAccTime);
    intervalId = setInterval(() => {
        totalAccTime += 1;
        updateSessionTimeStr(totalAccTime);
    }, 1000);

    toggleButtonDeactivate();
}

function startCustom() {
    const iInput = document.getElementById("inhaleInput");
    const h1Input = document.getElementById("holdOneInput");
    const eInput = document.getElementById("exhaleInput");
    const h2Input = document.getElementById("holdTwoInput");
    let inhale, exhale, holdOne, holdTwo;

    const numChecker = new RegExp("^[0-9]{1,2}$");
    if (!numChecker.test(iInput.value) || !numChecker.test(h1Input.value) || !numChecker.test(eInput.value) ||  !numChecker.test(h2Input.value)) {
        timeOutput.innerText = "Custom setup error. Check numbers.";
        return;
    }

    try {
        inhale = parseInt(iInput.value);
        holdOne = parseInt(h1Input.value);
        exhale = parseInt(eInput.value);
        holdTwo = parseInt(h2Input.value);
    } catch {
        timeOutput.innerText = "Custom setup error. Check numbers.";
        return;
    }

    const steps = ["Inhale", "Hold", "Exhale", "Hold"];
    const counts = [inhale, holdOne, exhale, holdTwo];

    let index = 0;
    let count = 1;
    timeOutput.innerText = steps[index] + " " + count;
    intervalId = setInterval(() => {
        count += 1;
        if (count >= counts[index] + 1) {
            index += 1;
            count = 1;
            if (counts[index] <= 0) {
                index += 1;
            }
            if (index >= steps.length) {
                index = 0;
            }
        }
        totalAccTime += 1;
        timeOutput.innerText = steps[index] + " " + count.toString();
        updateSessionTimeStr(totalAccTime);
    }, 1000);
    toggleButtonDeactivate();
}

function toggleButtonDeactivate() {
    const sessionButtons = document.getElementsByClassName("sessionButton");
    const btnList = Array.from(sessionButtons);
    btnList.forEach((btn) => {
        btn.disabled = !btn.disabled;
    })
}
