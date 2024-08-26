import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

const EventForm = ({ event, onSave }) => {
  const { addEvent, editEvent } = useContext(EventContext);
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');
  const [category, setCategory] = useState(event ? event.category : '');
  const [description, setDescription] = useState(event ? event.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      id: event ? event.id : Date.now(),  // Use existing ID for edit, new ID for add
      title,
      date,
      category,
      description,
    };

    if (event) {
      editEvent(eventData);  // Edit existing event
    } else {
      addEvent(eventData);  // Add new event
    }

    onSave(eventData);  // Call onSave to handle redirection or further actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">{event ? 'Update Event' : 'Add Event'}</button>
    </form>
  );
};

export default EventForm;
