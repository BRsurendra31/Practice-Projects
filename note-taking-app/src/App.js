import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Pagination from './components/Pagination';
import Home from './Home';
import { getNotes, saveNotes } from './helpers/localStorageHelper';
import './styles/App.css';
import { Button } from 'react-bootstrap';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [editingNote, setEditingNote] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setNotes(getNotes());
    }, []);

    const handleSaveNote = (note) => {
        const updatedNotes = editingNote
            ? notes.map(n => n.id === note.id ? note : n)
            : [...notes, { ...note, id: Date.now(), timestamp: new Date().toLocaleString() }];
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
        setEditingNote(null);
    };

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
    };

    const handleEditNote = (note) => {
        setEditingNote(note);
        setShowModal(true);
    };

    const filteredNotes = notes.filter(note =>
        note.title.includes(searchTerm) || note.content.includes(searchTerm)
    );

    const notesPerPage = 10;
    const paginatedNotes = filteredNotes.slice(
        (currentPage - 1) * notesPerPage,
        currentPage * notesPerPage
    );

    return (
        <div className="App">
            <Home />
            <div className="note-section">
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    Add Note
                </Button>
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <NoteList notes={paginatedNotes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
                <Pagination
                    totalNotes={filteredNotes.length}
                    notesPerPage={notesPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
            <NoteForm
                onSave={handleSaveNote}
                note={editingNote}
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default App;
