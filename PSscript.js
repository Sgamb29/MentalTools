

const textInput = document.getElementById("textInput");

const stepText = document.getElementById("stepText");


let outputText = "";

let currentStep = 1;

const process = {
    "1": "Step 1: Write Out What The Problem Is",
    "1add": "Problem: \n\n",
    "2": "Step 2: Brainstorm Solutions to The Problem",
    "2add": "Possible Solutions: \n\n",
    "3": "Step 3: Under The Solutions Write Out The Positives and Negatives for Each Solution: ",
    "4": "Step 4: Choose a Solution To Try and After Trying It Review How It Worked Out!",
    "4add": "Make sure to copy and paste what you have so you can put it in your notes!",
    
}

textInput.value = process["1add"] + process["2add"] + "Solution Choice: \n\n" + "Solution Review: \n";


function nextStep() {
    currentStep += 1;
    if (currentStep <= 4) {
        stepText.innerText = process[currentStep.toString()];
    }


    if (currentStep == 4) {
        document.getElementById("tip").innerText = process["4add"];
    }
    
}

function backStep() {
    currentStep -= 1;
    if (currentStep >= 1) {
        stepText.innerText = process[currentStep.toString()];
    }
}

function copyText() {
    textInput.select();
    textInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textInput.value);

    document.getElementById("tip").innerText = "Text Copied!";

}