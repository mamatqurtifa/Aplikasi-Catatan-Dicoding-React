// src/App.jsx
import React, { useState } from 'react';
import { getInitialData } from './utils/index';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import NoteSearch from './components/NoteSearch';

export default function Main() {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="note-app__body">
      <NoteSearch onSearch={setSearch} />
      <NoteInput onAddNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList 
        notes={filteredNotes.filter(note => !note.archived)} 
        onDelete={deleteNote} 
        onArchive={toggleArchive} 
      />
      <h2>Arsip</h2>
      <NoteList 
        notes={filteredNotes.filter(note => note.archived)} 
        onDelete={deleteNote} 
        onArchive={toggleArchive} 
      />
    </div>
  );
}
