/** @format */
import QuestionsTimer from './QuestionsTimer.jsx';
import Answers from './Answers.jsx';

function Question({
	questionText,
	answers,
	onSelectAnswer,
	selectedAnswer,
	answerState,
	onSkipAnswer,
}) {
	return (
		<div id='question'>
			<QuestionsTimer timeout={10000} onTimeout={onSkipAnswer} />
			<h2>{questionText}</h2>
			<Answers
				answers={answers}
				selectedAnswer={selectedAnswer}
				answerState={answerState}
				onSelect={onSelectAnswer}
			/>
		</div>
	);
}

export default Question;
