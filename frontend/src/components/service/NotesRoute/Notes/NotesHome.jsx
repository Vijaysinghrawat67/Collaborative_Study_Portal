import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../../..//authContest/AuthContext.jsx';

function NotesHome() {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();

  return (
    <div className="notes-home text-center py-8">
      <h1 className="text-4xl font-semibold mb-6">Notes</h1>

      {isLoggedIn ? (
        <>
        <button
        className="mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate('/services/notes/create')}
      >
        Create Note
      </button>
      <button
        className="mx-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => navigate('/services/notes/list')}
      >
        See Your Notes
      </button>
        </>
      ) : (
        <div>Please log in to manage your notes.</div>
      )}
      
    </div>
  );
}

export default NotesHome;
