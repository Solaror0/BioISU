 
 window.onload=function(){
    const lowSpeedBox = document.getElementById("lowSpeedBox");
    const medSpeedBox = document.getElementById("medSpeedBox")
    const highSpeedBox = document.getElementById("highSpeedBox");
    const superSpeedBox1 = document.getElementById("superSpeedBox1");
    
    lowSpeedBox.addEventListener("mouseover",speedTrackOne);
    medSpeedBox.addEventListener("mouseover",speedTrackTwo);
    highSpeedBox.addEventListener("mouseover",speedTrackThree);
    superSpeedBox1.addEventListener("mouseover",speedTrackFour);
 }

 function speedTrackOne(){
    let lowSpeedBoxValue = lowSpeedBox.value;
    const speedDisplay = document.getElementById("speedDisplay");
    const SpeedText = document.getElementById("lowSpeedText");
    speedDisplay.textContent = "5.5 m/s";
    SpeedText.classList.remove('text-red-400');
    SpeedText.classList.add('text-green-400');
    console.log(500)
    console.log(lowSpeedBoxValue)
 }
 function speedTrackTwo(){
    const SpeedText = document.getElementById("medSpeedText");
    const speedDisplay = document.getElementById("speedDisplay");
    speedDisplay.textContent = "8.0 m/s";
    SpeedText.classList.remove('text-red-400');
    SpeedText.classList.add('text-green-400');
    console.log(600)

 }
function speedTrackThree(){
    const SpeedText = document.getElementById("highSpeedText");
    const speedDisplay = document.getElementById("speedDisplay");
    speedDisplay.textContent = "13.9 m/s";
    SpeedText.classList.remove('text-red-400');
    SpeedText.classList.add('text-green-400');
    console.log(700)
}

function speedTrackFour(){
    const SpeedText = document.getElementById("superSpeedText");
    const speedDisplay = document.getElementById("speedDisplay");
    speedDisplay.textContent = "19.9 m/s";
    SpeedText.classList.remove('text-red-400');
    SpeedText.classList.add('text-green-400');
    console.log(800)
}