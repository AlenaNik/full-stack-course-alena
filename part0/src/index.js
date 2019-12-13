import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Total from './Total';
import Content from './Content';
import Display from './Display';
import Button from './Button';

const App = (props) => {
    const [counter, setCounter] = useState(0)

const setValueTo = (value) => setCounter(value)


    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={() => setValueTo(counter + 1)} text='Click me'/>
            <Button onClick={() => setValueTo(0)} text='Reset Button'/>
        </div>
            )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
