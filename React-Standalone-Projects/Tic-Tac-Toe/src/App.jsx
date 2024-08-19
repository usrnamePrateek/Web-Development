import { Player } from "./components/Player";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/WinningCombinations";
import GameOver from "./components/GameOver";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [playerSymbolMap, setPlayerSymbolMap] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  let winner;
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (const turn of gameTurns) {
    const { square, symbol } = turn;
    gameBoard[square.row][square.col] = symbol;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      gameBoard[a.row][a.col] &&
      gameBoard[a.row][a.col] === gameBoard[b.row][b.col] &&
      gameBoard[a.row][a.col] === gameBoard[c.row][c.col]
    ) {
      winner = playerSymbolMap[gameBoard[a.row][a.col]];
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
    setActivePlayer("X");
  }

  function handlePlayerNameChange(playerSymbol, playerName) {
    console.log(playerSymbol, playerName);
    setPlayerSymbolMap((prevMap) => ({
      ...prevMap,
      [playerSymbol]: playerName,
    }));
  }

  function handleSelectSquare(rowIndex, colIndex, playerSymbol) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const newTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          symbol: playerSymbol,
        },
        ...prevTurns,
      ];
      return newTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        {(winner || hasDraw) && (
          <GameOver winner={winner} onSelectRematch={handleRematch} />
        )}

        <ol id="players" className="highlight-player">
          <Player
            name={playerSymbolMap["X"]}
            symbol="X"
            isActive={activePlayer === "X"}
            onPlayerNameChange={handlePlayerNameChange}
          />
          <Player
            name={playerSymbolMap["O"]}
            symbol="O"
            isActive={activePlayer === "O"}
            onPlayerNameChange={handlePlayerNameChange}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
