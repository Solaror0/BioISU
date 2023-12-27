window.onload=function(){

    clumpedBox = document.getElementById("clumpedDist")
    randomBox = document.getElementById("randomDist")
    uniformBox = document.getElementById("uniformDist")

    clumpedBox.addEventListener("click",answerCheckClump)
    randomBox.addEventListener("click",answerWrong.bind(null,randomBox))
    uniformBox.addEventListener("click",answerWrong.bind(null,uniformBox))
}

function answerCheckClump(){
    clumpedBox.classList.remove("text-white","border-yellow-500")
    clumpedBox.classList.add("text-green-500","border-green-500")
    console.log(500)
}

function answerWrong(item){

    item.classList.remove("text-white","border-yellow-500")
    item.classList.add("text-red-500","border-red-500")

}