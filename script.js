let questions = [
  {
    question: "Who invented HTML?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "What is the capital of France?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "Paris",
    answer_4: "Lisbon",
    right_answer: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer_1: "Earth",
    answer_2: "Mars",
    answer_3: "Jupiter",
    answer_4: "Venus",
    right_answer: 2,
  },
  {
    question: "What is the largest ocean on Earth?",
    answer_1: "Atlantic Ocean",
    answer_2: "Indian Ocean",
    answer_3: "Arctic Ocean",
    answer_4: "Pacific Ocean",
    right_answer: 4,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer_1: "William Shakespeare",
    answer_2: "Charles Dickens",
    answer_3: "Mark Twain",
    answer_4: "Ernest Hemingway",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
    if(currentQuestion >= questions.length){
        // show end screen
    } else { 

      let percent = (currentQuestion + 1) / questions.length;
      percent = Math.round(percent * 100);
document.getElementById('progress-bar').innerHTML = `${percent}%`;
document.getElementById('progress-bar').style = `width: ${percent}%;`;


      console.log(percent)
        let question = questions[currentQuestion];
        document.getElementById("question-count").innerHTML = currentQuestion + 1;
        document.getElementById("questionText").innerHTML = question.question;
        document.getElementById("answer_1").innerHTML = question.answer_1;
        document.getElementById("answer_2").innerHTML = question.answer_2;
        document.getElementById("answer_3").innerHTML = question.answer_3;
        document.getElementById("answer_4").innerHTML = question.answer_4;
    }
}

function answer(answer) {
  let question = questions[currentQuestion];
  let selectedAnswer = answer.slice(-1);
  let idOfRightAnswer = `answer_${question.right_answer}`;
  if (selectedAnswer == question.right_answer) {
      document.getElementById(answer).classList.add("bg-success");
    } else {
        document.getElementById(answer).classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).classList.add("bg-success");
    }
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion += 1; // or currentQuestion ++
    document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").classList.remove("bg-success");
  document.getElementById("answer_1").classList.remove("bg-danger");
  document.getElementById("answer_2").classList.remove("bg-success");
  document.getElementById("answer_2").classList.remove("bg-danger");
  document.getElementById("answer_3").classList.remove("bg-success");
  document.getElementById("answer_3").classList.remove("bg-danger");
  document.getElementById("answer_4").classList.remove("bg-success");
  document.getElementById("answer_4").classList.remove("bg-danger");
}


