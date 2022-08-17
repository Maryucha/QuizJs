const createQuestion = (questionCreate) => {
   
  let tempQuestion = {
    question:document.getElementById('question'),
    options:[
      {
        option:document.getElementById('option1'),
        answer: document.getElementById('answer1')
      },
      {
        option:document.getElementById('option2'),
        answer: document.getElementById('answer2')
      },
      {
        option:document.getElementById('option3'),
        answer: document.getElementById('answer3')
      },
      {
        option:document.getElementById('option4'),
        answer: document.getElementById('answer4')
      },
    ],
  }

  questionCreate = JSON.stringify(tempQuestion);

 fetch(url,'http://localhost:3000/questions', {
    
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(questionCreate)
  }).then(response.json());

  console.log(response);
}


document.addEventListener('click', createQuestion);