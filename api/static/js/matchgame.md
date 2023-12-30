 
 window.onload=function(){
 const dfBox1 = document.getElementById("boxDarkFeathers1");
 dfBox1.addEventListener("click",dfBox1Function);

 const dfBox2 = document.getElementById("boxDarkFeathers2");
 dfBox2.addEventListener("click",dfBox2Function);

 const aSize1 = document.getElementById("antarcticSize1");
 const aSize2 = document.getElementById("antarcticSize2");
 aSize1.addEventListener("click",aSize1Function);
 aSize2.addEventListener("click",aSize2Function);



 const hiddenBg = document.getElementById("hiddenBg");
 hiddenBg.addEventListener("click",bgFunction);


 }

let bgClick = Boolean
let amountSelected = 0;
let checkValues = ["",""];
let whatClicked = ["null","null"];


setInterval(checkValuesListener,100);

function checkValuesListener(){
    if (amountSelected == 2){
    if (checkValues[0].slice(0,-1) == checkValues[1].slice(0,-1))
    {
        console.log("true")
        whatClicked[0].classList.add("hidden")
        whatClicked[1].classList.add("hidden")
        whatClicked = ["",""]
        checkValues = ["",""]
        amountSelected = 0;
    }
    else{
        console.log("false!")
        whatClicked[0].classList.remove("border-green-500")
        whatClicked[0].classList.add("border-yellow-500")
        whatClicked[1].classList.remove("border-green-500")
        whatClicked[1].classList.add("border-yellow-500")
        whatClicked = ["",""]
        checkValues = ["",""]
        amountSelected = 0;
    }
    }
}

function bgFunction(){
    whatClicked[0].classList.remove("border-green-500")
    whatClicked[0].classList.add("border-yellow-500")

    whatClicked = ["",""]
    checkValues = ["",""];
    amountSelected = 0;

    console.log(0,whatClicked,checkValues,amountSelected)
}

function dfBox1Function(){
    const dfBox1 = document.getElementById("boxDarkFeathers1")
    
    if(!(checkValues.includes("darkFeathers1"))){
        checkValues[amountSelected] = "darkFeathers1";
        whatClicked[amountSelected] = dfBox1;
        whatClicked[amountSelected].classList.remove("border-yellow-500");
        whatClicked[amountSelected].classList.add("border-green-500");
    
        amountSelected += 1;
    }
    console.log(1)
    console.log(checkValues,amountSelected)

   

    
 }

function dfBox2Function(){
    const dfBox2 = document.getElementById("boxDarkFeathers2")
    

    if(!(checkValues.includes("darkFeathers2"))){
        checkValues[amountSelected] = "darkFeathers2";
        whatClicked[amountSelected] = dfBox2;
        whatClicked[amountSelected].classList.remove("border-yellow-500");
        whatClicked[amountSelected].classList.add("border-green-500");
        amountSelected += 1;
    }
    console.log(1)
    console.log(checkValues,amountSelected)

 }

function aSize1Function(){
    const aSize1 = document.getElementById("antarcticSize1");
    

    if(!(checkValues.includes("aSize1"))){
        checkValues[amountSelected] = "aSize1";
        whatClicked[amountSelected] = aSize1;
        amountSelected += 1;
    }
    console.log(1)
    console.log(checkValues,amountSelected)

   
    aSize1.classList.remove("border-yellow-500");
    aSize1.classList.add("border-green-500");
    
 }

function aSize2Function(){
    const aSize2 = document.getElementById("antarcticSize2");
    

    if(!(checkValues.includes("aSize2"))){
        checkValues[amountSelected] = "aSize2";
        whatClicked[amountSelected] = aSize2;
        amountSelected += 1;
    }
    console.log(1)
    console.log(checkValues,amountSelected)

   
    aSize2.classList.remove("border-yellow-500");
    aSize2.classList.add("border-green-500");
    
 }