 
 window.onload=function(){
    const lowSpeedBox = document.getElementById("lowSpeedBox");
    const medSpeedBox = document.getElementById("medSpeedBox")
    lowSpeedBox.addEventListener("mouseover",speedTrackOne);
    medSpeedBox.addEventListener("mouseover",speedTrackTwo);
 }

 function speedTrackOne(){
    let lowSpeedBoxValue = lowSpeedBox.value;
    const speedDisplay = document.getElementById("speedDisplay");
    speedDisplay.textContent = "5.5 m/s";
    console.log(500)
    console.log(lowSpeedBoxValue)
 }
 function speedTrackTwo(){
    const speedDisplay = document.getElementById("speedDisplay");
    speedDisplay.textContent = "7.1 m/s";
    console.log(600)

 }
