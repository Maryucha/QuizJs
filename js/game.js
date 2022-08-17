window.addEventListener('DOMContentLoaded', () => renderQuestion());

window.addEventListener('DOMContentLoaded', () => renderUser());

window.addEventListener('DOMContentLoaded', () => game());


/* GAME - PAGE*/
const name = document.getElementById('name');
const points = document.getElementById('points');
const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');



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

/** PROGRESS - PAGE*/
const progress = document.getElementById('progress');

/**
 * Listar as perguntas
 */
const renderQuestion = async () => {
  let uri = 'http://localhost:3000/questions/1';
  const res = await fetch(uri);
  const questions = await res.json();
  console.log('Questions', questions);

  question.innerHTML = questions.question;
  option1.innerHTML = questions.options[0].option;
  option2.innerHTML = questions.options[1].option;
  option3.innerHTML = questions.options[2].option;
  option4.innerHTML = questions.options[3].option;
}


/**
 * Listar usuário
 */
const renderUser = async () => {
  let uri = 'http://localhost:3000/gamers/1';
  const res = await fetch(uri);
  const user = await res.json();

  
  name.innerHTML = user.name;
  points.innerHTML = user.points;

  console.log('user', user);
}

/**
 * carregando spinner
 */
const game = async () => {
  let uri = 'http://localhost:3000/questions';
  const res = await fetch(uri);
  const questions = await res.json();
  const status = questions.length;

  progress.innerHTML = 10 - status;
  progress.ariaValueNow = status;
  progress.ariaValueMax = 100;
  progress.ariaValueMin = 0;

  console.log('progress', progress);
}

const validateAnswer = async () => {

}
