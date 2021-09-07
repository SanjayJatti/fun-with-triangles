const angleInput=document.querySelectorAll(".angle-input");
const checkBtn= document.querySelector("#check-btn");
const outputDiv=document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2,angle3){
    const sum= angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
    const sumOfAngles= calculateSumOfAngles( Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value))
    if(sumOfAngles===180){
    outputDiv.innerText= "It is a triangle."
    }else{
    outputDiv.innerText= "It is NOT a triangle."
    }
}

function checkError(){
    if(angleInput[0].value>0 && angleInput[1].value>0 && angleInput[2].value>0){
        isTriangle();
    }
    else{
        outputDiv.innerText="Please enter valid angle value";
    }  
}
checkBtn.addEventListener("click",checkError);
