import React from 'react'

export const Filter = ({ filterPersons, handleFilteredPersons }) => {
    return (
        <div>
            <p>filter shown with</p>
            <input value={filterPersons} onChange={handleFilteredPersons}/>
        </div>
    )
}
