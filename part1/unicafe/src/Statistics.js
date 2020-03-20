import React from 'react'

export const Statistics = (props) => {
    return (
        <>
            <h1>statistics</h1>
            <p>good {props.good} </p>
            <p>neutral {props.neutral} </p>
            <p>bad {props.bad}</p>
            <p>all {props.sum}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
        </>
    )
}
