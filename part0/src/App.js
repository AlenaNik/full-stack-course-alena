import React, { useState } from "react";

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            id: '1',
            name: 'Arto Hellas'}
    ])
    const [ newName, setNewName ] = useState('')

    const addName = e => {
        e.preventDefault()
        const personObject = {
            id: persons.length + 1,
            name: newName
        }
        setNewName(persons.push(personObject))
        setNewName('')
        console.log(persons)
    }
    const handleNameChange = e => {
        console.log(e.target.value)
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
                   <p key={person.id}>{person.name}</p>)
               }
           </div>
       </div>
    )
}
export default App
