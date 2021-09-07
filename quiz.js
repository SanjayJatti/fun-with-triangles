const quizForm=document.querySelector(".quiz-form");
const questions=document.querySelectorAll(".questions")
const submitBtn=document.querySelector("#submit-btn");
const outputDiv=document.querySelector("#output");
const correctAnswers=["90°","Equilateral triangle","Acute angle","Isosceles Triangle","Median"];

function calculateFinalScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputDiv.innerText="Your final score is "+score;
}


submitBtn.addEventListener("click",calculateFinalScore);
