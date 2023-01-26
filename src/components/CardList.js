import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';

export default function CardList({ player, setFrom, cards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.suit + card.value} player={player} setFrom={setFrom} card={card} />
      ))}
    </div>
  );
}
