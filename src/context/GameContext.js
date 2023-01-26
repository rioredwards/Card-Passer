import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
