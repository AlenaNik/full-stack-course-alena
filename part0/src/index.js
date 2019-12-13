import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Total from './Total';
import Content from './Content';

const App = (props) => {
    const [counter, setCounter] = useState(0)

  const setValueTo = (value) => setCounter(value);


    return (
        <div>{counter}
        <button onClick={() => setValueTo(counter + 1)}> Click me</button>
        <button onClick={() => setValueTo(0)}> Click me to reset</button>
        </div>
            )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
