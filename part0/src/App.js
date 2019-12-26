import Note from "./components/Note";
import React, { useState } from "react";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked')
    }

    const rows = () =>
        notes.map(note => <Note
            key={note.id}
            note={note}
        />
 )

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App
