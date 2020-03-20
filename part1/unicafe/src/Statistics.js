import React from 'react'

export const Statistics = (props) => {
if (props.bad || props.good || props.neutral) {
    {
        return (
            <>
                <p>good {props.good} </p>
                <p>neutral {props.neutral} </p>
                <p>bad {props.bad}</p>
                <p>all {props.sum}</p>
                <p>average {props.average}</p>
                <p>positive {props.positive} %</p>
            </>
        )
    }
} else {
    return (
        <p>No feedback given yet</p>
    )
}
}
