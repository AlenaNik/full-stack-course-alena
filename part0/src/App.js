 import React, {useState, useEffect} from 'react'
 import axios from 'axios'
 import Note from "./Note";
import noteService from './services/notes'


 const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

     useEffect(() => {
            noteService.getAll()
             .then(initialNotes => setNotes(initialNotes))
     },[])



    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

   const notesToShow = showAll
       ? notes
       : notes.filter(note => note.important)

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote.trim(),
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }

        noteService.create(noteObject).then(returnedNotes => {
        setNotes(notes.concat(returnedNotes))
        setNewNote('')
        console.log(noteObject)
        })
    }

     const toggleImportanceOf = id => {
         const note = notes.find(n => n.id === id)
         const changedNote = { ...note}
         changedNote.important = !changedNote.important

         noteService.update(id, changedNote).then(returnedNotes => {
             setNotes(notes.map(note => note.id !== id ? note : returnedNotes))
         }).catch(error => {
             alert(`The note: ${note.content} was already deleted`)
             setNotes(notes.filter(n => n.id !== id))
         })
     }


     return (
         <div>
             <h1>Notes</h1>
             <div>
                 <button onClick={() => setShowAll(!showAll)}>
                     show {showAll ? 'important' : 'all' }
                 </button>
             </div>
             <ul>
                 {notesToShow ? notesToShow.map((note, id) =>
                     <Note key={id} note={note}
                           toggleImportance={() => toggleImportanceOf(note.id)}
                     />
                 ) : ''}
             </ul>
             <form onSubmit={addNote}>
                 <input value={newNote} onChange={handleNoteChange}/>
                 <button type="submit">save</button>
             </form>
         </div>
     )
 }

 export default App

