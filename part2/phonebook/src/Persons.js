import React from 'react'
import Person from './Person'

export const Persons = ({ persons, filterPersons, deletePerson }) => {

    return (
        <>
            {persons.filter(person =>
                person.name &&
                person.name.toUpperCase().includes(filterPersons.toUpperCase())).map(
                person => (
                <Person  key={person.id}
                         person={person.name}
                         num={person.number}
                         deleteP={() => deletePerson(person.id)}
                />)
            )}
        </>
    )
}
