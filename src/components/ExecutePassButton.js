import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, from, to } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
