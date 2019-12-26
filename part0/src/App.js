import React, { useState } from "react";
import Persons from './components/Persons.component'
import Filter from "./components/Filter.component";
import PersonFrom from './components/PersonForm.component';

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

    const personsFiltered = filter === ' '
        ? persons : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))



    return (
       <div>
           <h2>Phonebook</h2>
           <Filter filter={filter} setFilter={setFilter}/>
           <h2>Add new contact person</h2>
           <PersonFrom
               addPerson={addPerson}
               newName={newName}
               handleNameChange={handleNameChange}
               handleNumberChange={handleNumberChange}
           />
           <h2>Numbers</h2>
           <div>
               <Persons persons={personsFiltered}/>
           </div>
       </div>
    )
}
export default App
