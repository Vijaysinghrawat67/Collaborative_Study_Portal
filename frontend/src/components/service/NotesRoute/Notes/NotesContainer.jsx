import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotesHome from './NotesHome';
import CreateNote from './CreateNote';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails';
import { v4 as uuidv4 } from 'uuid';
import PrivateRoute from '../PrivateRouteNote';

function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const navigate = useNavigate();

  const handleSave = (noteData) => {
    if(noteData.id){
      setNotes((prevNotes) => prevNotes.map((note) => (note.id === noteData.id ? noteData : note)));
    } else{
      const newNote = { ...noteData, id: uuidv4() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
    navigate('/services/notes/create');
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleView = (note) => {
    setCurrentNote(note);
    navigate(`/services/notes/details/${note.id}`);
  };

  return (
    <div className="notes-container">
      <Routes>
        <Route path="/" element={<NotesHome />} />
        <Route path="/create" element={<PrivateRoute element={<CreateNote onSave={handleSave} note={currentNote} />} />} />
        <Route path="/list" element={<PrivateRoute element={<NotesList notes={notes} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />} />} />
        <Route path="/details/:id" element={<NoteDetails note={currentNote} />} />
      </Routes>
    </div>
  );
}

export default NotesContainer;
