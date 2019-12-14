import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import History from './History';


const App = (props) => {
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
    setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            {right}
            <button onClick={handleRightClick}>right</button>
            <History allClicks={allClicks}/>
        </div>
    )

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
