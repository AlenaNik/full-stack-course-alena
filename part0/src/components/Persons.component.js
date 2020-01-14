import React from 'react';
import personService from "../services/persons";

const Persons = ({ persons, setPersons }) => {
    const deletePerson = deletingPerson => {
        const {id, name} = deletingPerson;
        const message = window.confirm(`Delete ${name}?`);
        if (message) {
            personService
                .eliminate(id)
                .then(data => {
                    setPersons(persons.filter(p =>
                        p.id !== id));
                }).catch(err => console.log('err', err));
        }
        console.log(message)
    }

    return (
        <>
            {persons.map (person =>
            <p key={person.name}>{person.name} {person.number}
                <button onClick={() => deletePerson(person)}>delete</button>
            </p>
            )}

          </>


    )
}

export default Persons;
