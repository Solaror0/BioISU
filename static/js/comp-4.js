window.onload=function(){
    const redButton = document.getElementById("redButton");
    const blueButton = document.getElementById("blueButton");
    const greenButton = document.getElementById("greenButton");
    const yellowButton = document.getElementById("yellowButton");


    const infoText = document.getElementById("infoText");
    const useButton = document.getElementById("useButton");

    redButton.addEventListener("click", redMove);
    blueButton.addEventListener("click", blueMove);
    greenButton.addEventListener("click", greenMove);
    yellowButton.addEventListener("click", yellowMove);
    
    useButton.addEventListener("click", buttonUsed);

    const buttonHandler = "none";

 }
 function nextPage(){
    window.location.href = "/comp-4p5";
}

function buttonUsed(){
    if (buttonHandler == "green"){
        useButton.classList.remove("bg-purple-500");
        useButton.classList.remove("bg-red-500");
        useButton.classList.add("bg-green-500");
        infoText.textContent = "CORRECT MOVE SELECTED! Please wait..."
        setTimeout(nextPage,2000)
    }
    else{
        useButton.classList.remove("bg-purple-500");
        useButton.classList.add("bg-red-500");
        infoText.textContent = "WRONG MOVE! Please select another."
    }
}
function redMove(){
    infoText.textContent = "If a predator is below Pengleon they’ll see white and this blends in with the light above."
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(100)
    buttonHandler = "red"


}

function blueMove(){

    infoText.textContent = "Pengleon moves at a speed of 6-9 km/hr through the water."
    
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(200)
    buttonHandler = "blue";


}
function greenMove(){

    
    infoText.textContent = "Pengleon blends into in the water due to her dark coat, hiding from predators that are above."
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(300)
    buttonHandler = "green";


}

function yellowMove(){

    infoText.textContent = "Very large colonies offer protection from predators and the cold."
    
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(400)
    buttonHandler = "yellow";


}
