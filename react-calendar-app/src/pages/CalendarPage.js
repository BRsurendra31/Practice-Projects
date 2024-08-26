import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import Filter from '../components/Filter';

const CalendarPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add Event</button>
      {showForm && <EventForm onSave={() => setShowForm(false)} />}
      <Filter />
      <EventList />
      <Calendar />
    </div>
  );
};

export default CalendarPage;
