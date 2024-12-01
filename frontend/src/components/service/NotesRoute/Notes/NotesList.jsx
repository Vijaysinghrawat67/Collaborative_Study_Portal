import React from 'react';
import NoteCard from './NoteCard';


function NotesList({ notes, onEdit, onDelete, onView }) {
 
  //console.log("RENDERING NOTESLIST:", notes);
  return (
    <div className="notes-list grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note._id)} 
          onView={() => onView(note)}
        />
      ))}
     
    </div>
  );
}

export default NotesList;
