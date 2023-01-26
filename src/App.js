import './App.css';
import Player from './components/Player';
import CardList from './components/CardList';
import ExecutePassButton from './components/ExecutePassButton';
import { useContext } from 'react';
import { GameContext } from './context/GameContext.js';

function App() {
  const {
    selectedCard,
    setSelectedCard,
    playerOneHand,
    playerTwoHand,
    playerThreeHand,
    from,
    setFrom,
    to,
    setTo,
    passCard,
  } = useContext(GameContext); // Refactor Me!!!

  const { deck } = useContext(GameContext); // Don't Refactor Me!!!
  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={1} hand={playerOneHand} setFrom={setFrom} setTo={setTo} />
        <Player to={to} player={2} hand={playerTwoHand} setFrom={setFrom} setTo={setTo} />
        <Player to={to} player={3} hand={playerThreeHand} setFrom={setFrom} setTo={setTo} />
        <CardList setFrom={setFrom} player={'deck'} cards={deck} />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton passCard={passCard} setFrom={setFrom} from={from} to={to} />
        )}
      </section>
    </div>
  );
}

export default App;
