const sides=document.querySelectorAll(".side-input");
const calculateAreaBtn=document.querySelector("#calculate-area-btn");
const outputDiv=document.querySelector("#output");

function calculateSemiPerimeter(a,b,c){
    const semiPerimeter=(a+b+c)/2;
    return semiPerimeter;
}
function calculateMultiplication(){
    const s=calculateSemiPerimeter(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value));

    const product=s*(s-Number(sides[0].value))*(s-Number(sides[1].value))*(s-Number(sides[2].value))

    return product;
}

function calculateArea(){
    const multiplication=calculateMultiplication()
    const area=Math.sqrt(multiplication);
    outputDiv.innerText="Area of triangle using Heron's formula = "+area.toFixed(2)+" unit square";

}
function checkError(){
    if(sides[0].value>0 && sides[1].value>0 && sides[2].value>0){
        calculateArea();
    }else{
        outputDiv.innerText="Please enter valid side values"
    }
}

calculateAreaBtn.addEventListener("click",checkError);
