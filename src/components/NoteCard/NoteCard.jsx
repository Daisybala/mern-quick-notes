import { useState } from "react";


export default function NoteCard({note}) {
  return (
    <>
      <h1>{note.text}</h1>
    </>
  );
}
