// src/components/NoteSearch.jsx
import React from "react";

export default function NoteSearch({ onSearch }) {
  return (
    <div className="note-search-container">
      <p><span>Notes </span>Apps</p>
      <input
        type="text"
        className="note-search"
        placeholder="Cari catatan..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
