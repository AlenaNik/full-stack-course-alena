import React, {useState} from 'react';
import './App.css';
import {Statistics} from './Statistics'

function App() {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGoodClick = () => {
    setGood(good + 1)
}
const handleBadClick = () => {
    setBad(neutral + 1)
    }
const handleNeutralClick = () => {
    setNeutral(bad + 1)
    }

const sumFeedback = (x, y, z) => {
    return x + y + z
}
const averageFeedback = (x, y, z) => {
        return (x + y + z) / 3
    }
const percentageOfPositiveFeedback = (x, y, z) => {
        return x / (x + y + z) * 100
    }


  return (
    <div className="App">
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>

        <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
        sum={sumFeedback(bad, good, neutral)}
        average={averageFeedback(good, bad, neutral)}
        positive={good ? percentageOfPositiveFeedback(good, bad, neutral) : ''}
        />
    </div>
  );
}

export default App;
