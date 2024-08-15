import React from 'react';
import Card from './Card';
import '../styles/Canvas.css';

const Canvas = ({ cards, moveCard, resizeCard, showMore }) => {
  return (
    <div className="canvas">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          detailedText={card.detailedText}
          x={card.x}
          y={card.y}
          width={card.width}
          height={card.height}
          moveCard={moveCard}
          resizeCard={resizeCard}
          showMore={showMore}
          showMoreContent={card.showMore}
        />
      ))}
    </div>
  );
};

export default Canvas;
