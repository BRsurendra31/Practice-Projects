import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NoteForm = ({ onSave, note, show, handleClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: note ? note.id : null, title, content });
        setTitle('');
        setContent('');
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{note ? 'Edit Note' : 'Add Note'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNoteTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formNoteContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        {note ? 'Update' : 'Add'} Note
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default NoteForm;
