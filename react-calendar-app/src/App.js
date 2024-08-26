import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import CalendarPage from './pages/CalendarPage';
import EventDetailsPage from './pages/EventDetailsPage';
import EditEventPage from './pages/EditEventPage'; // Import the edit event page

function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/event/:id/edit" element={<EditEventPage />} /> {/* Add this route */}
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
