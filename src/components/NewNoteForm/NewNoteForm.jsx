import { useState } from "react";

export default function NewNoteForm ({addNote}) {
    const [newNote, setNewNote] = useState('');
    function handleAddNewNote(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote('')
    }
    return(
        <>
            <h1>New Note Form</h1>
            <form onSubmit={handleAddNewNote}>
                <input
                type="text"
                value={newNote}
                onChange={(evt) => setNewNote(evt.target.value)}
                placeholder="New Note"
                required
                />
                <button type="submit">ADD NEW-NOTE</button>
            </form>
        </>
        
    )
}