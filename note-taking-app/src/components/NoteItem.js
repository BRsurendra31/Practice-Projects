import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
    return (
        <div className="NoteItem">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{note.timestamp}</small>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button className="delete" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default NoteItem;
