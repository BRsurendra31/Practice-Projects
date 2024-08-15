import React, { useRef } from 'react';
import '../styles/Line.css'
const Line = ({ line, onDelete }) => {
  const lineRef = useRef(null);

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete(line.id);
  };

  return (
    <svg ref={lineRef} className="line">
      <line x1={line.start.x} y1={line.start.y} x2={line.end.x} y2={line.end.y} stroke="black" strokeWidth="2" />
      <circle cx={line.end.x} cy={line.end.y} r="5" fill="red" stroke="black" strokeWidth="1" onClick={handleDeleteClick} />
    </svg>
  );
};

export default Line;