import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const { events, deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const handleEdit = (event) => {
    navigate(`/event/${event.id}/edit`);
  };

  return (
    <div>
      <h3>Event List</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} on {event.date}
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
