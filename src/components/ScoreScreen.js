import React, {useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts";
import {Questions} from "../Helpers/QuestionBank"


function ScoreScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className="EndScreen">
            <h2>Quiz Finished</h2>
            <h3> {score} / {Questions.length} </h3>

            <button onClick={restartQuiz}> Restart Quiz</button>
        </div>
    );
}

export default ScoreScreen;