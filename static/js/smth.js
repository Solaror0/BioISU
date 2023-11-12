window.onload=function(){
    const kingdomtext = document.getElementById("kingdomtext");
    const continentSlider = document.getElementById("continentslider");
    const areaNumber = document.getElementById("areanumber");
  
    continentSlider.addEventListener("input",print);
  
    kingdomtext.addEventListener("click",hide);
    areaNumber.addEventListener("click",hide);
    


    
}



function print(){
    let continentSlider =  document.getElementById("continentslider");
    const sliderValue = continentSlider.value;
    const areaNumber = document.getElementById("areanumber");
    areaNumber.textContent = sliderValue;
    if (sliderValue != 14){
        areaNumber.classList.remove("text-green-500")
        areaNumber.classList.add("text-red-500")
    } else {
        areaNumber.classList.remove("text-red-500")
        areaNumber.classList.add("text-green-500")
    }
    console.log(sliderValue)

   
}
function hide(){
    console.log(105)
 
}
