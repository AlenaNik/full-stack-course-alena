 import React from 'react'
 import Note from "./Note";

 const App = ({ notes }) => {
     console.log(notes)
     return (
         <div>
             <h1>Notes</h1>
             <ul>
                 {notes ? notes.map((note, id) =>
                     <Note key={id} note={note}/>
                 ) : ''}
             </ul>
         </div>
     )
 }

 export default App
