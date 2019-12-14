import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Button from './Button';
import Statistic from './Statistic';
import Statistics from "./Statistics";

const App = (props) => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

    const setGoodClick = (value) => {
        setGood(value)
    }
    const setNeutralClick = (value) => {
        setNeutral(value)
    }
    const setBadClick = (value) => {
        setBad(value)
    }

const sum = bad + good + neutral;
const average = good - bad;
const positive = good / sum * 100;

    if (!bad && !good && !neutral) {
        return (
            <>
                <h1>Give Feedback</h1>
                <Button onClick={() => setGoodClick(good + 1)} text='good'/>
                <Button onClick={() => setNeutralClick(neutral + 1)}  text='neutral'/>
                <Button onClick={() => setBadClick(bad + 1)}  text='bad'/>
                <h1>statistic</h1>
            <p>No Feedback given </p>
            </>

        )
    }
    return (
        <>
            <h1>Give Feedback</h1>
            <Button onClick={() => setGoodClick(good + 1)} text='good'/>
            <Button onClick={() => setNeutralClick(neutral + 1)}  text='neutral'/>
            <Button onClick={() => setBadClick(bad + 1)}  text='bad'/>
            <h1>statistic</h1>
            <Statistics statistic={bad} text="bad result"/>
            <Statistics statistic={good} text="good result"/>
            <Statistics statistic={neutral} text="neutral result"/>
            <Statistics statistic={sum} text="all"/>
            <Statistics statistic={average} text="average"/>
            <Statistics statistic={positive} text="positive"/>

        </>
    )

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
