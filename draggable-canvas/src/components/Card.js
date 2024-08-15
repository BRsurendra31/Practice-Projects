import React, { useState } from 'react';
import '../styles/Card.css'; // Import Card-specific CSS

const Card = ({ card, onConnectionStart }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="card-content">
      <p>{isExpanded ? card.details : card.content}</p>
      <button onClick={toggleExpand}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
      {onConnectionStart && <button onClick={onConnectionStart}>Connect</button>}
    </div>
  );
};

export default Card;
