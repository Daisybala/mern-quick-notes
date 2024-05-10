import { useState, useEffect } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import * as notesAPI from "../../utilities/notes-api";


export default function NoteListPage() {
  const [notes, setNotes] = useState([]);

  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  }
  useEffect(()=>{
    async function getAllNotes() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes)

    };
    getAllNotes();

  }, [])

  return (
    <>
      <h1>NoteListPage</h1>
      <NewNoteForm addNote={addNote}/>

      {
        notes&&notes.length ? 
          notes.map((note, idx) => <NoteCard key={idx} note={note}/>)
          :
          "No Notes Yet"
      }
    </>
  );
}
