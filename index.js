var quizdata = [

	{
		question: 'Which framework is related to JS?',
		a: '.net',
		b: 'flask',
		c: 'react',
		d: 'django',
		correct: 'c'
	},
	{
		question: 'Which is not a programming language?',
		a: 'html',
		b: 'python',
		c: 'java',
		d: 'javascript',
		correct: 'a'
	},
	{
		question: 'Which is not a framework?',
		a: 'react',
		b: 'javascript',
		c: 'angular',
		d: 'django',
		correct: 'b'
	},
	{
		question: 'css stands for?',
		a: 'cascading style state',
		b: 'cascading style sheet',
		c: 'cascading style of style',
		d: 'none',
		correct: 'b'
	}


]


var quiz = document.getElementById('quiz')

var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')


var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')
// -----------------------------------------------

var currentquestion = 0
var quizeScore = 0

loadQuiz() // for automatically calling function

function loadQuiz(){
	deselect()

	question.innerHTML = quizdata[currentquestion].question

	option_a.innerHTML = quizdata[currentquestion].a
	option_b.innerHTML = quizdata[currentquestion].b
	option_c.innerHTML = quizdata[currentquestion].c
	option_d.innerHTML = quizdata[currentquestion].d
}

function deselect(){
	answer.forEach(answer=>answer.checked=false)
}

// updating question---------------------
submitbtn.addEventListener('click', ()=> {
	var selectedOptions;
	answer.forEach(answer=>{
		if (answer.checked) {
			selectedOptions = answer.id
		}
	})

	if (selectedOptions==quizdata[currentquestion].correct) {
		quizeScore = quizeScore+1;
	}
	currentquestion = currentquestion+1;

	//for last question---------------
	if (currentquestion==quizdata.length) {
		document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizeScore} out of ${quizdata.length}</h1>`
	}else{
		loadQuiz()
	}

})