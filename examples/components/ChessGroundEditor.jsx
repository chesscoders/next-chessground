import React, { useEffect, useState, useRef } from 'react';
import { Chessground } from 'next-chessground';
import { SparePieces } from '.';
import { addPiece } from '../functions';

const ChessGroundEditor = ({ fen, initial, getPosition }) => {
  const [selected, setSelected] = useState({ role: null, color: null });
  const [current, setCurrent] = useState(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  );
  const [drag, setDrag] = useState(true);

  useEffect(() => {
    setCurrent(initial);
  }, []);

  useEffect(() => {
    if (selected && selected.color && selected.role) {
      setDrag(false);
    } else {
      setDrag(true);
    }
  }, [selected]);

  useEffect(() => {
    if (typeof getPosition === 'function') {
      getPosition(current);
    }
  }, [current]);

  const ref = useRef(null);
  const onSelect = (key) => {
    if (selected && selected.role && selected.color) {
      addPiece(ref.current.board, setCurrent, selected, key);
    }
  };
  const onMove = () => {
    setCurrent(ref.current.board.getFen());
  };

  return (
    <div className="space-y-4">
      <SparePieces
        selected={selected}
        selectPiece={setSelected}
        color="black"
      />
      <Chessground
        ref={ref}
        onSelect={onSelect}
        onMove={onMove}
        fen={fen || current}
        draggable={{ enabled: drag }}
      />
      <SparePieces
        selected={selected}
        selectPiece={setSelected}
        color="white"
      />
    </div>
  );
};

export default ChessGroundEditor;
