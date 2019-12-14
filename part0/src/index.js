import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import History from './History';
import Button from './Button';

const App = (props) => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

    const setGoodClick = (goodclick) => {
        setGood(goodclick)
    }
    const setNeutralClick = (neutralclick) => {
        setNeutral(neutralclick)
    }
    const setBadClick = (badclick) => {
        setBad(badclick)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            {good}
            <Button onClick={() => setGoodClick(good + 1)} text='good'/>
            {neutral}
            <Button onClick={() => setNeutralClick(neutral + 1)}  text='neutral'/>
            {bad}
            <Button onClick={() => setBadClick(bad + 1)}  text='bad'/>
            <h1>statistic</h1>
            <History result={bad} text="bad result"/>
            <History result={good} text="good result"/>
            <History result={neutral} text="neutral result"/>
        </div>
    )

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
