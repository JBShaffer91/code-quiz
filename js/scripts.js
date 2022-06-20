const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)

startButton.classList.add('hide')
currentQuestionIndex = 0


function startQuiz() {
  consol.log('Started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
  questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = {
    question: 'What is your favorite color?'
    answers: 
      {text: 'Red'}
      {text: 'Blue'}
      {text: 'Black'}

    question: 'What is your favorite movie genre?'
    answers:
      {text: 'Comedy'}
      {text: 'Horror'}
      {text: 'Sci-Fi'}

    question: 'What is your favorite music genre?'
    answers:
      {text: 'Punk Rock'}
      {text: 'Metal'}
      {text: 'Hip Hop'}

    question: 'What is your favorite city?'
    answers: 
      {text: 'Los Angeles, CA'}
      {text: 'Portland, OR'}
      {text: 'New York City, NY'}

    question: 'Who is your favorite superhero?'
    answers:
      {text: 'Spider-Man'}
      {text: 'Thor'}
      {text: 'Hulk'}
}