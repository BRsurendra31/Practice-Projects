import React from 'react';

const EventDetails = ({ event, onClose }) => (
  <div>
    <h2>{event.title}</h2>
    <p>Date: {event.date}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default EventDetails;
