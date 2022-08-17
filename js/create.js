const form = document.getElementById('form');

/**
 * 
 */
const createQuestion = async (e) => {

    e.preventDefault();

    tempQuestion = {
        question: form.question.value,
        options: [
            {
                option: form.option1.value,
                answer: form.answer1.value
            },
            {
                option: form.option2.value,
                answer: form.answer2.value
            },
            {
                option: form.option3.value,
                answer: form.answer3.value
            },
            {
                option: form.option4.value,
                answer: form.answer4.value
            },
        ],
    }


    if (form.question.value === '') {
        alert('Please select a question');
    } else {
        await fetch('http://localhost:3000/questions', {
            method: 'POST',
            body: JSON.stringify(tempQuestion),
            headers:{ 'Content-Type': 'application/json' }
        });
         window.location.replace('./index.html');
    }
}

form.addEventListener('submit', createQuestion);
