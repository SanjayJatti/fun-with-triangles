const sideInput=document.querySelectorAll(".side-input");
const calculateBtn=document.querySelector("#calculate-btn");
const outputDiv=document.querySelector("#output");

function sumOfSquaresOfSides(a,b){
    const sum= (a*a)+(b*b);
    return sum;
}

function calculateHypotenuse(){
    const sumOfSquares=sumOfSquaresOfSides(Number(sideInput[0].value), Number(sideInput[1].value));

    const hypotenuseLength=Math.sqrt(sumOfSquares);

    outputDiv.innerText="The length of Hypotenuse = "+hypotenuseLength+" unit";
}
calculateBtn.addEventListener("click",calculateHypotenuse);