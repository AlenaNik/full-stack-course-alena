import React from 'react'

export const PersonForm = ({ handleFormSubmit, valueName, NameChange, NumberChange, valueNumber }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input
                value={valueName}
                onChange={NameChange}/>
                <br/>
                number: <input
                value={valueNumber}
                onChange={NumberChange}/>
            </div>
            <div>
                <button type="submit">
                    add
                </button>
            </div>
        </form>
    )
}

