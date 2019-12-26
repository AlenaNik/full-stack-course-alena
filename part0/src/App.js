import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [ filter, setFilter ] = useState('')

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
    const handleFilterChange = e => {
        const inputFilter = e.target.value;
        setFilter(inputFilter);
    }
    const personsFiltered = filter === ' '
        ? persons : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))



    return (
       <div>
           <h2>Phonebook</h2>
           <div>
               search: <input
               onChange={handleFilterChange}
           />
           </div>
           <h2>Add new contact person</h2>
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
                {personsFiltered.map (person =>
                   <p key={person.name}>{person.name} {person.number}</p>)
               }
           </div>
       </div>
    )
}
export default App
