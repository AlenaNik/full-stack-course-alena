import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { useFormFields } from './FormHook'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { Filter } from './Filter'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterPersons, setFilterPersons ] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons').then(response => {
            setPersons(response.data)
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
            window.confirm`${personObject.name
                } is already on the list`
        } else {
            axios.post('http://localhost:3001/persons', personObject).then(res => {
                setPersons(persons.concat(res.data))
                setNewName('')
                setNewNumber('')
            })
        }
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
                             filterPersons={filterPersons} />
        </div>
    );
}

export default App;
