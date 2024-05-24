
let signalCount = 0;
let noiseCount = 0;

function changeTextSignal(id) {
    document.getElementById(id).innerText = "This is a Signal Worry!";
    signalCount += 1;
    document.getElementById("sC").innerText = "Signal Count: " + signalCount.toString();
}

function changeTextNoise(id) {
    document.getElementById(id).innerText = "This Worry is Just Noise!";
    noiseCount += 1;
    document.getElementById("nC").innerText = "Noise Count: " + noiseCount.toString();
}

function clearInput() {
    document.getElementById("worryInput").value = "";
}