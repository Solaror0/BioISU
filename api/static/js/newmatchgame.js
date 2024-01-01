 
 window.onload=function(){
    const dfBox1 = document.getElementById("boxDarkFeathers1");
    dfBox1.addEventListener("click",dfBox1Function);
   
    const dfBox2 = document.getElementById("boxDarkFeathers2");
    dfBox2.addEventListener("click",dfBox2Function);
   
    const aSize1 = document.getElementById("aSize1");
    const aSize2 = document.getElementById("aSize2");
    aSize1.addEventListener("click",aSize1Function);
    aSize2.addEventListener("click",aSize2Function);
   
    const wfBox1 = document.getElementById("wfBox1");
    const wfBox2 = document.getElementById("wfBox2");
    wfBox1.addEventListener("click",wfBox1Function);
    wfBox2.addEventListener("click",wfBox2Function);
   
   
    const predators1 = document.getElementById('predators1')
    const predators2 = document.getElementById('predators2')
    predators1.addEventListener("click",predators1Function);
    predators2.addEventListener("click",predators2Function);
   
   
    const sCurve1 = document.getElementById('sCurve1')
    const sCurve2 = document.getElementById('sCurve2')
    sCurve1.addEventListener("click",sCurve1Function);
    sCurve2.addEventListener("click",sCurve2Function);
   
    
    const pDist1 = document.getElementById('pDist1')
    const pDist2 = document.getElementById('pDist2')
    pDist1.addEventListener("click",pDist1Function);
    pDist2.addEventListener("click",pDist2Function);
   
    const hiddenBg = document.getElementById("hiddenBg");
    hiddenBg.addEventListener("click",bgFunction);
   
    console.log("0")
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
           whatClicked[0].classList.add("opacity-0")
           whatClicked[1].classList.add("opacity-0")
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
   
   
   function inCheckValues(givenValue){
       if (!(checkValues.includes(givenValue))){
           resultBool=true
       }
       else{
           resultBool=false
       }
   
       return resultBool
   }
   
   function dfBox1Function(){
       const dfBox1 = document.getElementById("boxDarkFeathers1")
       whatClicked[amountSelected] = dfBox1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(1, value)
       console.log(checkValues,amountSelected)
     
    }
   
    function dfBox2Function(){
       const dfBox2 = document.getElementById("boxDarkFeathers2")
       whatClicked[amountSelected] = dfBox2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(2, value)
       console.log(checkValues,amountSelected)
     
    }
   
    function aSize1Function(){
       const aSize1 = document.getElementById("aSize1")
       whatClicked[amountSelected] = aSize1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(3, value)
       console.log(checkValues,amountSelected)
     
    }
   
   
    function aSize2Function(){
       const aSize1 = document.getElementById("aSize2")
       whatClicked[amountSelected] = aSize2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(4, value)
       console.log(checkValues,amountSelected)
     
    }
   
    
   function wfBox1Function(){
       const wfBox1 = document.getElementById("wfBox1")
       whatClicked[amountSelected] = wfBox1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(5, value)
       console.log(checkValues,amountSelected)
     
    }
   
   function wfBox2Function(){
       const wfBox2 = document.getElementById("wfBox2")
       whatClicked[amountSelected] = wfBox2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(6, value)
       console.log(checkValues,amountSelected)
     
    }
   function predators1Function(){
       const predators1 = document.getElementById("predators1")
       whatClicked[amountSelected] = predators1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(7, value)
       console.log(checkValues,amountSelected)
     
    }
   
   function predators2Function(){
       const predators2 = document.getElementById("predators2")
       whatClicked[amountSelected] = predators2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(8, value)
       console.log(checkValues,amountSelected)
     
    }
   
   function sCurve1Function(){
       const sCurve1 = document.getElementById('sCurve1')
       whatClicked[amountSelected] = sCurve1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(9, value)
       console.log(checkValues,amountSelected)
     
    }
   
   function sCurve2Function(){
       const sCurve1 = document.getElementById('sCurve2')
       whatClicked[amountSelected] = sCurve2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(9, value)
       console.log(checkValues,amountSelected)
     
    }
   
    
   function pDist1Function(){
       const pDist1 = document.getElementById('pDist1')
       whatClicked[amountSelected] = pDist1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(11, value)
       console.log(checkValues,amountSelected)
     
    }
   
    
   function pDist1Function(){
       const pDist1 = document.getElementById('pDist1')
       whatClicked[amountSelected] = pDist1;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(11, value)
       console.log(checkValues,amountSelected)
     
    }
    
   function pDist2Function(){
       const pDist2 = document.getElementById('pDist2')
       whatClicked[amountSelected] = pDist2;
       let value = whatClicked[amountSelected].id;
       
       result = inCheckValues(whatClicked[amountSelected].id);
   
       if (result){
           checkValues[amountSelected] = whatClicked[amountSelected].id;
           whatClicked[amountSelected].classList.remove("border-yellow-500");
           whatClicked[amountSelected].classList.add("border-green-500");
           amountSelected += 1;
           
       }
       console.log(12, value)
       console.log(checkValues,amountSelected)
     
    }