let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "What is the capital of France?",
        "answer_1": "Berlin",
        "answer_2": "Madrid",
        "answer_3": "Paris",
        "answer_4": "Lisbon",
        "right_answer": 3
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answer_1": "Earth",
        "answer_2": "Mars",
        "answer_3": "Jupiter",
        "answer_4": "Venus",
        "right_answer": 2
    },
    {
        "question": "What is the largest ocean on Earth?",
        "answer_1": "Atlantic Ocean",
        "answer_2": "Indian Ocean",
        "answer_3": "Arctic Ocean",
        "answer_4": "Pacific Ocean",
        "right_answer": 4
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "answer_1": "William Shakespeare",
        "answer_2": "Charles Dickens",
        "answer_3": "Mark Twain",
        "answer_4": "Ernest Hemingway",
        "right_answer": 1
    }
];

let currentQuestion = 0;


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;

}