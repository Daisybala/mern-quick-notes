import { useState } from "react";

export default function NewNoteForm ({addNote}) {
    const [newNote, setNewNote] = useState({text: ''});

    function handleAddNewNote(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote({text: ''})
    }

    function handleChange(evt) {
        const note = {...newNote, [evt.target.name]: evt.target.value};
        setNewNote(note)
    }

    return(
        <>
            <h1>New Note Form</h1>
            <form onSubmit={handleAddNewNote}>
                <input
                name="text"
                type="text"
                value={newNote.text}
                onChange={handleChange}
                placeholder="New Note"
                required
                />
                <button type="submit">ADD NEW-NOTE</button>
            </form>
        </>
        
    )
}