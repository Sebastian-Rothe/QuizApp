let questions = [];
let currentQuestion = 0;
let yourScore = 0;
let AUDIO_SUCCESS = new Audio('./audio/success.mp3');
let AUDIO_WRONG= new Audio('./audio/wrong.mp3');

function init() {
  document.getElementById("background").classList.add("d-none");
  document.getElementById("quiz-card").classList.remove("d-none");
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}

function answer(answer) {
  let question = questions[currentQuestion];
  let selectedAnswer = answer.slice(-1);
  let idOfRightAnswer = `answer_${question.right_answer}`;

  if (rightAnswerSelected(selectedAnswer, question)) {
    document.getElementById(answer).classList.add("bg-success");
    AUDIO_SUCCESS.play();
    yourScore += 1;
  } else {
    document.getElementById(answer).classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).classList.add("bg-success");
    AUDIO_WRONG.play();
  }
  document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(selectedAnswer, question){
  return selectedAnswer == question.right_answer;
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

function pushData(category) {
  questions = questions.concat(questionsData[category]);
}

function restartGame() {
  questions = [];
  currentQuestion = 0;
  yourScore = 0;
  console.log('hello')
  document.getElementById("end-screen").classList.add("d-none");
  document.getElementById("background").classList.remove("d-none");
}

function showEndScreen(){
  document.getElementById("quiz-card").classList.add("d-none");
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById("possible-score").innerHTML = questions.length;
  document.getElementById("your-score").innerHTML = yourScore;
}

function updateToNextQuestion(){
  let question = questions[currentQuestion];
  document.getElementById("question-count").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question.question;
  document.getElementById("answer_1").innerHTML = question.answer_1;
  document.getElementById("answer_2").innerHTML = question.answer_2;
  document.getElementById("answer_3").innerHTML = question.answer_3;
  document.getElementById("answer_4").innerHTML = question.answer_4;
}

function updateProgressBar(){
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;

}


