import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const Calendar = () => {
  const { events } = useContext(EventContext);

  return (
    <div>
      <h2>Calendar</h2>
      <div className="calendar-grid">
        {events.map((event) => (
          <div key={event.id} className="calendar-event">
            {event.title} - {event.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
