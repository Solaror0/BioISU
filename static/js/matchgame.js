 
 window.onload=function(){
 const dfBox1 = document.getElementById("boxDarkFeathers1");
 dfBox1.addEventListener("click",dfBox1Function);
 dfBox1.setInterval((dfBox1Check), 10);

 const hiddenBg = document.getElementById("hiddenBg");
 hiddenBg.addEventListener("click",bgFunction);

 const whatClicked = "null";


 }

let amountSelected = 0;
let checkValues = ["",""];
 
function bgFunction(){
    whatClicked = "hiddenBg"
    console.log(0, whatClicked)
}

function dfBox1Function(){
    whatClicked = "dfBox1";

    if(!(checkValues.includes("darkFeathers1"))){
        checkValues[amountSelected] = "darkFeathers1";
        amountSelected += 1;
    }
    console.log(1)
    console.log(checkValues,amountSelected)

    const dfBox1 = document.getElementById("boxDarkFeathers1")
    if (whatClicked != "dfBox1"){
        dfBox1.classList.remove("border-green-400")
        dfBox1.classList.add("border-yellow-500")
    }
    else{
        dfBox1.classList.remove("border-yellow-500")
        dfBox1.classList.add("border-green-400")
        let alreadyClicked = true
    }
 }
function dfBox1Check(){

}