const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

startButton.classList.add('hide')
currentQuestionIndex = 0


function startQuiz() {
  consol.log('Started')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add(correct)
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
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