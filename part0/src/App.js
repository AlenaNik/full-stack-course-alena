import React, { useState, useEffect } from "react";
import Persons from './components/Persons.component'
import Filter from "./components/Filter.component";
import PersonFrom from './components/PersonForm.component';
import personService from './services/persons';
import Notification from './components/Notification.component';
import NotificationPositive from "./components/Notification.positive.component";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [errorMess, setErrorMess] = useState('')
    const [okMess, setOkMess] = useState('')

  useEffect(() => {
        personService
            .getAll()
            .then(initialPerson => {
                setPersons(initialPerson)
            })
    }, []);

    const addPerson = e => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(e => e.name === newName)) {
            setErrorMess(`${newName} is already added to phonebook`)
            setTimeout(() => {
                setErrorMess(null)
            }, 5000)
        } else {
            personService
                .create(personObject)
                .then(returnedPersons => {
                    setNewName(persons.push(returnedPersons))
                    setNewName('')
                    setOkMess(`${newName} successfully added`)
                    setTimeout(() => {
                        setOkMess(null)
                    }, 5000)
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
           <Notification message={errorMess}/>
           <NotificationPositive message={okMess}/>
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
               <Persons persons={personsFiltered}
               />
           </div>
       </div>
    )
}
export default App
