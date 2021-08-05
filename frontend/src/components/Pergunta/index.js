

import React, { useState } from 'react';

import "./pergunta.css";

export default function Pergunta() {
	const questions = [
		{
			questionText: 'Quantos anos tem o Brasil?',
			answerOptions: [
				{ answerText: '518', isCorrect: false },
				{ answerText: '519', isCorrect: false },
				{ answerText: '520', isCorrect: true },
				{ answerText: '521', isCorrect: false },
			],
		},
		{
			questionText: 'Qual destas NÃO é invenção do Tesla?',
			answerOptions: [
				{ answerText: 'Motor de indução', isCorrect: false },
				{ answerText: 'Bomba de calor por absorção', isCorrect: true },
				{ answerText: 'Controle remoto', isCorrect: false },
				{ answerText: 'Raio violeta', isCorrect: false },
			],
		},
		{
			questionText: 'Qual opção NÃO é uma fruta em inglês?',
			answerOptions: [
				{ answerText: 'Ginger', isCorrect: true },
				{ answerText: 'Pear', isCorrect: false },
				{ answerText: 'Soursop', isCorrect: false },
				{ answerText: 'Star fruit', isCorrect: false },
			],
		},
		{
			questionText: 'Quantos trabalhos realizou Hércules segundo a mitologia grega?',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '12', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
      
		<div className='container3'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
                            
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
                           
                        </div>
                        
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    
                        <p>Clique Na Resposta</p>
                    </div>
                
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                
				</>
			)}
		</div>
	);
}
