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
    window.location.href = "/comp-3p5";
}
function buttonUsed(){
    if (buttonHandler == "red"){
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

    infoText.textContent = "Deep Sea Diving: Pengleon can dive up to 550m and breath for 22 minutes."
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(100)
    buttonHandler = "red"


}

function blueMove(){

    infoText.textContent = "A heat exchange system to prevent heat loss in flippers and legs. Allows 80% of breath to be recaptured in nasal areas."
    
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(200)
    buttonHandler = "blue";


}
function greenMove(){

    infoText.textContent = "Helps grip on snow and ice, especially when emerging from the ocean."
    
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(300)
    buttonHandler = "green";


}

function yellowMove(){

    infoText.textContent = "Males can/will sleep 20-24 hours per day while incubating egg and waiting for female to conserve energy."
    
    useButton.classList.remove("hidden");
    useButton.classList.add("flex","visible");
    console.log(400)
    buttonHandler = "yellow";


}
