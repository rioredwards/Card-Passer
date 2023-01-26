import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';

export default function CardList({ player, setFrom }) {
  const { deck } = useContext(GameContext);
  return (
    <div className="card-list">
      {deck.map((card) => (
        <Card key={card.suit + card.value} player={player} setFrom={setFrom} card={card} />
      ))}
    </div>
  );
}
