import React from 'react'


export const Total = (props) => {

    const total = props.parts.reduce((acc, curr) => {
        return acc += curr.exercises
    }, 0);

    return(
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}
