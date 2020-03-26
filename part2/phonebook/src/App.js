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
    const [ fields, handleFieldChange ] = useFormFields({
        name: '',
        number: '',
        filter: ''
    });

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

        persons.filter(person => {
            person.name === personObject.name ? alert(`${personObject.name} is 
        already added to phonebook
        `) : setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        })
    }

    const handleFilterChange = e => {
        setFilterPersons(e.target.value);
 }

    const personsFiltered = filterPersons === ' '
        ? persons : persons.filter(person =>
            person.name.toLowerCase().includes(filterPersons.toLowerCase()))


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
                valueName={fields.newName}
                handleFieldChange={handleFieldChange}
                valueNumber={fields.newNumber}
            >
            </PersonForm>
            <h2>Numbers</h2>
            <ol>
                {personsFiltered ? personsFiltered.map((person, id) =>
                    <Persons key={id}>{person.name} {person.number}</Persons>
                ): ''}
            </ol>
        </div>
    );
}

export default App;
