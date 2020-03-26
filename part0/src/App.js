 import React, {useState, useEffect} from 'react'
 import axios from 'axios'
 import Note from "./Note";


 const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

     useEffect(() => {
         axios.get('http://localhost:3001/notes')
             .then(res => setNotes(res.data))
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

        setNotes(notes.concat(noteObject))
        setNewNote('')
        console.log(noteObject)
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
                     <Note key={id} note={note}/>
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

