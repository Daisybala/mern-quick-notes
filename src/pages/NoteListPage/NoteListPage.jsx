import { useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";


export default function NoteListPage() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }
  
  return (
    <>
      <h1>NoteListPage</h1>
      <NewNoteForm addNote={addNote}/>

      {
        notes&&notes.length
          ? notes.map((note, idx) => <NoteCard key={idx} note={note}/>)
          : "No Notes Yet"
      }
    </>
  );
}
