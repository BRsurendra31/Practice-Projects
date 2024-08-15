import React from 'react';
import '../styles/Arrows.css'; // Ensure this file exists and is properly linked

const Arrows = ({ cards, connections }) => {
  const getCardPosition = (cardId) => {
    const card = cards.find(c => c.id === cardId);
    return card ? { x: card.x, y: card.y, width: card.width, height: card.height } : { x: 0, y: 0, width: 0, height: 0 };
  };

  return (
    <svg className="arrows" width="100%" height="100%">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto-start-reverse">
          <path d="M0,0 L0,6 L9,3 z" fill="#007bff" />
        </marker>
      </defs>
      {connections.map((connection, index) => {
        const startCard = getCardPosition(connection.startId);
        const endCard = getCardPosition(connection.endId);

        const startX = startCard.x + startCard.width / 2;
        const startY = startCard.y + startCard.height / 2;
        const endX = endCard.x + endCard.width / 2;
        const endY = endCard.y + endCard.height / 2;

        return (
          <line
            key={index}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#007bff"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        );
      })}
    </svg>
  );
};

export default Arrows;
