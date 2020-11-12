import React, { useState, useEffect } from 'react';
import Chessground from './Chessground';
import { Chess } from 'chess.js';
import { movable } from '../functions';

const Legal = ({ fen, ...props }) => {
  const [chess, setChess] = useState(new Chess(fen));
  const [turnColor, setTurn] = useState(chess.turn());

  const onMove = (from, to) => {
    chess.move({ from, to, promotion: 'q' });
  };

  useEffect(() => {
    if (chess.history().length) {
      setChess(chess);
      setTurn(chess.turn());
    }
  }, [chess.history()]);

  return (
    <Chessground
      fen={chess.fen()}
      onMove={onMove}
      movable={movable(chess)}
      turnColor={turnColor === 'w' ? 'white' : 'black'}
      {...props}
    />
  );
};

export default Legal;
