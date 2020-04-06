import React from 'react'

const Person = ({ person, num, deleteP }) => {
    return (
        <div>
            <p>{person} {num}</p>
            <button onClick={deleteP}>Delete Person</button>
        </div>
    )
}

export default Person
