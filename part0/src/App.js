import React, { useState } from "react";

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')


    const addPerson = e => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(e => e.name === newName)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            setNewName(persons.push(personObject))
            setNewName('')
        }
    }


    const handleNameChange = e => {
        setNewName(e.target.value)
    }
    const handleNumberChange = e => {
        setNewNumber(e.target.value)
    }
    return (
       <div>
           <h2>Phonebook</h2>
           <form onSubmit={addPerson}>
               <div>
                   name: <input
                   value={newName}
                   onChange={handleNameChange}
               />
                   <div>
                       number: <input
                       value={newNumber}
                       onChange={handleNumberChange}
                   />
                   </div>
               </div>
               <div>
                   <button type="submit">add</button>
               </div>
           </form>
           <h2>Numbers</h2>
           <div>
                {persons.map (person =>
                   <p key={person.name}>{person.name} {person.number}</p>)
               }
           </div>
       </div>
    )
}
export default App
