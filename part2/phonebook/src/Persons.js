import React from 'react'

export const Persons = ({ num, person }) => {
    console.log(person)
    return (
        <li>{num} {person}</li>
    )
}
