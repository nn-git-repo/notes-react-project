import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    handleEditNote(id, editedText);
    setEditing(false);
  };

  return (
    <div className='note'>
      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div className='note-footer'>
            <small>{date}</small>
            <MdEdit onClick={handleEdit} className='edit-icon' size='1.3em' />
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3em'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
