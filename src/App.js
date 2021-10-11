import './App.css';
import React, {useState} from 'react'
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import ScoreScreen from "./components/ScoreScreen";

import {QuizContext} from "./Helpers/Contexts"

//Using Context API to get Access of the GameState in every component
function App() {
    //Main Menu when user open the app
    const [gameState, setGameState] = useState("menu")
    const [score, setScore] = useState(0)

    return (
        <div className="App">
            <h1>Quiz App</h1>

            {/* Wrapping the context provider around all the components we want to pass the state to &
            Value is an Object, Which can contain states, variables or functions. When we call the context in those files, We'll have full access to that states */}
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === "menu" && <MainMenu/>}
                {gameState === "quiz" && <Quiz/>}
                {gameState === "scoreScreen" && <ScoreScreen/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
