import React from 'react';
import '../styles/Popup.css'; // Import Popup-specific CSS

const Popup = ({ content, onClose, position }) => {
  return (
    <div className="popup" style={{ top: position.top, left: position.left }}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
