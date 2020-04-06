import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { useFormFields } from './FormHook'
import personsServices from './services/personsServices'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { Filter } from './Filter'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterPersons, setFilterPersons ] = useState('')

    useEffect(() => {
        personsServices.getPersons().then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])


    const addPerson = (e) => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }

        if (persons.filter(person => person.name === personObject.name).length > 0
        ) {
            window.confirm`${personObject.name} is already on the list`
        } else {
            personsServices.createPersons().post('http://localhost:3001/persons', personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
        }
    }

    const deletePerson = (id, name) => {
        const person = persons.find(p => p.id === id)
        const personsToDelete = {...person}
        personsServices.deletePersons(id, personsToDelete).then(returnedPerson => {
            alert(`You want to delete ${personsToDelete.name} ?`)
            setPersons(persons.filter(n => n.id !== id))
        })
    }


    const handleFilterChange = e => {
        setFilterPersons(e.target.value);
 }
    const handleNameChange = e => {
        setNewName(e.target.value)
    }
    const handleNumberChange = e => {
        setNewNumber(e.target.value)
    }



    return (
        <div className="App">
            <h2>Phonebook</h2>
            <Filter
                filterPersons={filterPersons}
                handleFilteredPersons={handleFilterChange}
            />
            <h2>add a new</h2>
            <PersonForm
                handleFormSubmit={addPerson}
                valueName={newName}
                NumberChange={handleNumberChange}
                NameChange={handleNameChange}
                valueNumber={newNumber}
            >
            </PersonForm>
            <h2>Numbers</h2>
                    <Persons
                             persons={persons}
                             filterPersons={filterPersons}
                             deletePerson={deletePerson}
                    />
        </div>
    );
}

export default App;
