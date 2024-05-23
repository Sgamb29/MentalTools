
const timeOutput = document.getElementById("timeOutput");        

let secCount = 1;
let breathIn = true;
let evenStarted = false;
let totalSeconds = 0;

let intervalId = 0;

let boxStarted = false;

function startEvenBreathing() {
    
    if (evenStarted || boxStarted) {
        return;
    }


    timeOutput.innerText = "Breathe In... " + secCount.toString();

    
    intervalId = setInterval(() => {
        secCount += 1;        
        if (breathIn) {
            timeOutput.innerText = "Breathe In... " + secCount.toString();
        } else {
            timeOutput.innerText = "Breathe Out... " + secCount.toString();
        }
        if (secCount % 4 == 0) {
            breathIn = !breathIn;
            secCount = 0;
        }
        totalSeconds += 1;

    }, 1000);

   
    
    evenStarted = true;



}


const boxBreathingSteps = ["Breathe In...", "Gentle Hold...", "Breathe Out...", "Gentle Hold..."];
let sequenceStep = 0;

function endSession() {
    if (!evenStarted && !boxStarted && !fourSevenStarted) {
        return;
    }
    clearInterval(intervalId);
    evenStarted = false;
    boxStarted = false;
    fourSevenStarted = false;
    timeOutput.innerText = "Good Job For The " + totalSeconds.toString() + " Second Session!";
    totalSeconds = 0;
    secCount = 1;
    sequenceStep = 0;
    currentFourSevenStep = 0;

}




function startBoxBreathing() {

    if (boxStarted || evenStarted) {
        return;
    }

    timeOutput.innerText = boxBreathingSteps[sequenceStep] + secCount.toString();

    
    intervalId = setInterval(() => {
        secCount += 1;
        
        
        timeOutput.innerText = boxBreathingSteps[sequenceStep] + secCount.toString();
        
        if (secCount % 4 == 0) {
            breathIn = !breathIn;
            secCount = 0;
            sequenceStep += 1;
            if (sequenceStep == boxBreathingSteps.length) {
                sequenceStep = 0;
            }
            
        }
        totalSeconds += 1;

    }, 1000);

   
    
    boxStarted = true;



}

const fourSevenEightSteps = ["Breathe In...", "Gentle Hold...", "Breathe Out.."];
const steps = [4, 7, 8];
let fourSevenStarted = false;
let currentFourSevenStep = 0;

function startFourSevenEight() {

    if (boxStarted || evenStarted || fourSevenStarted) {
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
        totalSeconds += 1;

    }, 1000);

   
    
    fourSevenStarted = true;
}