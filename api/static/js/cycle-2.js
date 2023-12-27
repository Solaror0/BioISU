
 window.onload=function(){
    const heatSlider = document.getElementById("heatSlider");
    heatSlider.addEventListener("input",heatSliderFunction);
    const timeSlider = document.getElementById("timeSlider");
    timeSlider.addEventListener("input",timeSliderFunction);
 }


 function heatSliderFunction(){
    const heatDisplay = document.getElementById("heatDisplay");
    const heatSliderValue = heatSlider.value;
    heatDisplay.textContent = heatSliderValue;
      const heatGreenBar = document.getElementById("heatGreenBar");

   let heatBrightness = (100/(Math.abs(36-(heatSliderValue)))) + "%";
   if (heatBrightness == "Infinity%"){
      heatBrightness = "100%";
   }
   if (heatBrightness == "100%" && (heatSliderValue==35 || heatSliderValue==37)){
      heatBrightness = "90%";
   }

   heatGreenBar.style.height = heatBrightness
   console.log("heat brightness", heatBrightness)

    console.log(500)
 }
 
 function timeSliderFunction(){
   const timeDisplay = document.getElementById("timeDisplay");
   const timeSliderValue = timeSlider.value;
   timeDisplay.textContent = timeSliderValue;
   const timeGreenBar = document.getElementById("timeGreenBar");

   let timeBrightness = (100/(Math.abs(65-(timeSliderValue)))) + "%";
   if (timeBrightness == "Infinity%"){
      timeBrightness = "100%";
   }
   if (timeBrightness == "100%" && (timeSliderValue==64 || timeSliderValue==66)){
      timeBrightness = "90%";
   }

   timeGreenBar.style.height = timeBrightness
   console.log("time brightness", timeBrightness)
   
 }