import React, { useState } from "react";

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const addName = e => {
        e.preventDefault()
        const personObject = {
            name: newName
        }

        if (persons.some(e => e.name === newName)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            setNewName(persons.concat(personObject))
            setNewName('')
        }
    }


    const handleNameChange = e => {
        setNewName(e.target.value)
    }

    return (
       <div>
           <h2>Phonebook</h2>
           <form onSubmit={addName}>
               <div>
                   name: <input
                   value={newName}
                   onChange={handleNameChange}
               />
               </div>
               <div>
                   <button type="submit">add</button>
               </div>
           </form>
           <h2>Numbers</h2>
           <div>
                {persons.map (person =>
                   <p key={person.name}>{person.name}</p>)
               }
           </div>
       </div>
    )
}
export default App
