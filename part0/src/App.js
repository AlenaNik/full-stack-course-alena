import React, { useState, useEffect } from "react";
import Persons from './components/Persons.component'
import Filter from "./components/Filter.component";
import PersonFrom from './components/PersonForm.component';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

  useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(res => {
                setPersons(res.data)
            })
    }, []);

    const addPerson = e => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(e => e.name === newName)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            axios.post('http://localhost:3001/persons', personObject)
                .then(res => {
                    setNewName(persons.push(res.data))
                    setNewName('')
                })
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
