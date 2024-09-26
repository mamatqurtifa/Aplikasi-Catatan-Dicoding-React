// src/components/NoteInput.jsx
import React, { useState } from 'react';

export default function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);

  const handleTitleChange = (event) => {
    const input = event.target.value;
    if (input.length <= 50) {
      setTitle(input);
      setCharLimit(50 - input.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setBody("");
    setCharLimit(50);
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Judul catatan" 
        value={title} 
        onChange={handleTitleChange} 
        required 
      />
      <p className="note-input__title__char-limit">Sisa karakter: {charLimit}</p>
      <textarea 
        placeholder="Isi catatan" 
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
        required 
      />
      <button type="submit">Tambah</button>
    </form>
  );
}
