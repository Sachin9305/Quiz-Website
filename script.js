const quizDB = [
    {
        question:"Q1: What is the full form of HTML ?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheets",
        ans: "ans1"

    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hyper Text Tranfer Product",
        b: "HyperText Test protocol",
        c: "Hey transfer Protocol",
        d: "HyperText transfer Protocol",
        ans: "ans4"
    },
    {
       question: "Q4: What is the fullform of JS?",
       a: "JavaScript",
       b: "JavaSuper",
       c: "JustScript",
       d: "JordenShoes",
       ans: "ans1" 
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit =  document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');
let questionCount =0;
let score=0;
const loadQuestion = () => {
    const questionlist = quizDB[questionCount];
    question.innerText=questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
loadQuestion();
 const getCheckAnswer = () =>{
    let answer;
     answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
       
     });
      return answer;

   
};

  const  deselectAll = () =>{
  answers.forEach((curAnsElem)=> curAnsElem.checked =false);
   }
submit.addEventListener('click',() =>{
   const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
  deselectAll (); 
   if(questionCount< quizDB.length){
    loadQuestion();
   }else{
    showScore.innerHTML =`
    <h3> You scored ${score}/${quizDB.length}</h3>
  <button class ="btn" onclick ="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');
   }
});