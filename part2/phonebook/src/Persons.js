import React from 'react'

export const Persons = ({ id, children }) => {
    return (
        <li key={id}>{children}</li>
    )
}
