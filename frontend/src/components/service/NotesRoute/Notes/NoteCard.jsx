import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

function NoteCard({ note, onEdit, onDelete, onView }) {
  return (
    <div className="note-card p-4 border rounded shadow">
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      <button onClick={onView} className="mr-2 text-blue-600 hover:text-blue-800">
        <FaEye /> View
      </button>
      <button onClick={onEdit} className="mr-2 text-green-600 hover:text-green-800">
        <FaEdit /> Edit
      </button>
      <button onClick={onDelete} className="text-red-600 hover:text-red-800">
        <FaTrash /> Delete
      </button>
    </div>
  );
}

export default NoteCard;
