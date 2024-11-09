import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'draft-js';

function NoteDetails({ note }) {
  const navigate = useNavigate();
  const editorState = EditorState.createWithContent(convertFromRaw(note.content));

  return (
    <div className="note-details p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{note.title}</h2>
      <Editor editorState={editorState} readOnly={true} />
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Back
      </button>
    </div>
  );
};

export default NoteDetails;
