import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const rows = () => notesToShow.map(note =>
        <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
        />
    )

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }
    const toggleImportanceOf = id => {
       const url = `http://localhost:3001/notes/${id}`
       const note = notes.find(n => n.id === id)
       const changedNote = { ...note, important: !note.important}

       axios.put(url, changedNote).then(res => {
           setNotes(notes.map(note => note.id !== id ? note : res.data))
       })
    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        }

       axios.post('http://localhost:3001/notes', noteObject)
           .then(res => {
               setNotes(notes.concat(res.data))
               setNewNote('')
    })
}

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
