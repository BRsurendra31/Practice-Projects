import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import EventDetails from '../components/EventDetails';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { events } = useContext(EventContext);
  const event = events.find(event => event.id === Number(id));

  return event ? <EventDetails event={event} onClose={() => window.history.back()} /> : <p>Event not found</p>;
};

export default EventDetailsPage;
