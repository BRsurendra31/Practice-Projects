import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';

const Filter = () => {
  const { events, setFilteredEvents } = useContext(EventContext);
  const [category, setCategory] = useState('All');

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    
    if (selectedCategory === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  };

  return (
    <div>
      <select value={category} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default Filter;
