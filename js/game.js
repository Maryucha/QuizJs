window.addEventListener('DOMContentLoaded', () => game());
window.addEventListener('DOMContentLoaded', () => renderQuestion());
window.addEventListener('DOMContentLoaded', () => renderUser());
window.addEventListener('DOMContentLoaded', () => validateAnswer());
window.addEventListener('DOMContentLoaded', () => findQuestion());

// #region game
/* GAME - PAGE*/
const nameUser = document.getElementById('name');
const points = document.getElementById('points');
const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
//#endregion game


// #region question
/* QUESTION - PAGE*/
const form = document.getElementById('form');
const newQuestion = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const newOption1 = document.getElementById('option1');
const newOption2 = document.getElementById('option2');
const newOption3 = document.getElementById('option3');
const newOption4 = document.getElementById('option4');

//#endregion question

// #region foi

/** PROGRESS - PAGE*/
const progress = document.getElementById('progress');
progress.ariaValueMax = 10;
progress.ariaValueMin = 0;
progress.ariaValueNow = 1;

//endregion foi

/**
 * Listar as perguntas
 */
const renderQuestion = async () => {
  const questionFind = await findQuestion();
  const questionNow = JSON.stringify(questionFind);
  const teste = JSON.parse(questionNow);

    tempQuestion = {
      question: teste.question,
      options: [
          {
              option: teste.options[0].option,
              answer: teste.options[0].answer
          },
          {
              option: teste.options[1].option,
              answer: teste.options[1].answer
          },
          {
              option: teste.options[2].option,
              answer: teste.options[2].answer
          },
          {
              option: teste.options[3].option,
              answer: teste.options[3].answer
          },
      ],
  }

    question.innerHTML = tempQuestion.question;
    option1.innerHTML = tempQuestion.options[0].option;
    option2.innerHTML = tempQuestion.options[1].option;
    option3.innerHTML = tempQuestion.options[2].option;
    option4.innerHTML = tempQuestion.options[3].option;



}


/**
 * Listar usuário
 */
const renderUser = async () => {
  let uri = 'http://localhost:3000/gamers/1';
  const res = await fetch(uri);
  const user = await res.json();

  
  nameUser.innerHTML = user.name;
  points.innerHTML = user.points;

}

/**
 * carregando spinner
 */
const game = async () => {
  let currentQuestion = progress.ariaValueNow;
  let uri = `http://localhost:3000/questions`;
  let i = 10;
  const res = await fetch(uri);
  const questions = await res.json();
  const status = questions.length * 10;

 

  progress.innerHTML = (10 - status) ? status : `${status}%` ;
  progress.style.width = `${status}%`;

}



/**
 * validando a pergunta
 */
const validateAnswer = async () => {
  let uri = 'http://localhost:3000/questions/';
  const res = await fetch(uri);
  const questions = await res.json();


  const answer = questions.find(x => x.options[0].answer === true);
  //console.log('answer', answer);
}

/**
 * 
 * @returns 
 */
const findQuestion = async () => {
  let currentQuestion = progress.ariaValueNow;
  let uri = `http://localhost:3000/questions/${currentQuestion}`;
  const res = await fetch(uri);
  const question = await res.json();
  return question;
}
