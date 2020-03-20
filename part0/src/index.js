import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {History} from "./History";
import {Button} from './Button'
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
            <div>
                {left}
                <Button onClick={handleLeftClick}>left</Button>
                <Button onClick={handleRightClick}>right</Button>
                {right}
                <History allClicks={allClicks}/>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
