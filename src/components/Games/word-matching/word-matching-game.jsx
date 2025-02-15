import React, { useState } from 'react';
import DifficultySelector from './difficulty-selector';
import GameBoard from './game-board';
import GameOver from './game-over';
import { DIFFICULTY_SETTINGS } from './mock-data-word-matching/word-matching';

const WordMatchingGame = () => {
  const [difficulty, setDifficulty] = useState('Medium');
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleGameStart = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
  };

  const handleGameOver = (finalScore) => {
    setScore(finalScore);
    setGameOver(true);
    setGameStarted(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {!gameStarted && !gameOver && (
        <DifficultySelector 
          onSelect={handleGameStart}
          currentDifficulty={difficulty}
        />
      )}
      
      {gameStarted && (
        <>
          <GameBoard
            difficulty={difficulty}
            settings={DIFFICULTY_SETTINGS[difficulty]}
            onGameOver={handleGameOver}
            onScoreUpdate={setScore}
          />
        </>
      )}

      {gameOver && (
        <GameOver 
          score={score} 
          onPlayAgain={() => handleGameStart(difficulty)}
        />
      )}
    </div>
  );
};

export default WordMatchingGame;