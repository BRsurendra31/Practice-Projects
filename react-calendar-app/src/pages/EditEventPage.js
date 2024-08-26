import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const { id } = useParams();
  const { events, editEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const event = events.find((event) => event.id === Number(id));

  const handleSave = (updatedEvent) => {
    editEvent(updatedEvent);
    navigate(`/event/${id}`);
  };

  return event ? (
    <div>
      <h2>Edit Event</h2>
      <EventForm event={event} onSave={handleSave} />
    </div>
  ) : (
    <p>Event not found</p>
  );
};

export default EditEventPage;
