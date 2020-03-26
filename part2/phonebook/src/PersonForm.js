import React from 'react'

export const PersonForm = ({ handleFormSubmit, valueName, handleFieldChange, valueNumber }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input
                value={valueName}
                onChange={handleFieldChange}/>
                <br/>
                number: <input
                value={valueNumber}
                onChange={handleFieldChange}/>
            </div>
            <div>
                <button type="submit">
                    add
                </button>
            </div>
        </form>
    )
}

