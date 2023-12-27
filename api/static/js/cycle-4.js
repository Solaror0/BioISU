
window.onload=function(){
    const krillOne = document.getElementById("krillOne");
    krillOne.addEventListener("mouseover",hide.bind(null,krillOne));
    krillTwo.addEventListener("mouseover",hide.bind(null,krillTwo));
    fishOne.addEventListener("mouseover",hide.bind(null,fishOne));
    fishTwo.addEventListener("mouseover",hide.bind(null,fishTwo));
    fishThree.addEventListener("mouseover",hide.bind(null,fishThree));
      
      
    
 }


function hide(item){
    item.classList.add("hidden");
    console.log(500)
}