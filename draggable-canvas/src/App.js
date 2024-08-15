import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Arrows from './components/Arrows';
import Card from './components/Card';
import Popup from './components/Popup';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [connections, setConnections] = useState([]);
  const [showPopup, setShowPopup] = useState({ visible: false, content: '' });
  const [dragging, setDragging] = useState(false);
  const [startConnection, setStartConnection] = useState(null);

  const addCard = () => {
    const newCard = {
      id: `card-${Date.now()}`,
      x: 100,
      y: 100,
      width: 200,
      height: 100,
      content: `Card ${cards.length + 1}`,
      details: `Detailed content of Card ${cards.length + 1}`
    };
    setCards(prevCards => [...prevCards, newCard]);
  };

  const toggleConnection = () => {
    setDragging(prevDragging => !prevDragging);
  };

  const addConnection = (startCardId, endCardId) => {
    if (startCardId !== endCardId) {
      setConnections(prevConnections => [...prevConnections, { startId: startCardId, endId: endCardId }]);
    }
  };

  const handleCardClick = (cardId) => {
    if (dragging) {
      if (startConnection === null) {
        setStartConnection(cardId);
      } else {
        addConnection(startConnection, cardId);
        setStartConnection(null);
      }
    }
  };

  const showMore = (content) => {
    setShowPopup({ visible: true, content });
  };

  const closePopup = () => {
    setShowPopup({ visible: false, content: '' });
  };

  return (
    <div className="App">
      <button onClick={addCard} className="add-card-button">Add Card</button>
      <button onClick={toggleConnection} className="toggle-connection-button">
        {dragging ? 'Stop Connecting' : 'Start Connecting'}
      </button>

      <div className="canvas">
        {cards.map(card => (
          <Rnd
            key={card.id}
            className="rnd-card"
            default={{
              x: card.x,
              y: card.y,
              width: card.width,
              height: card.height
            }}
            onDragStop={(e, d) => {
              const updatedCards = cards.map(c =>
                c.id === card.id ? { ...c, x: d.x, y: d.y } : c
              );
              setCards(updatedCards);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              const updatedCards = cards.map(c =>
                c.id === card.id
                  ? {
                      ...c,
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                      x: position.x,
                      y: position.y
                    }
                  : c
              );
              setCards(updatedCards);
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card
              card={card}
              onShowMore={() => showMore(card.details)}
            />
          </Rnd>
        ))}
        <Arrows cards={cards} connections={connections} />
        {showPopup.visible && (
          <Popup
            content={showPopup.content}
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default App;
