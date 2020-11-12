import React, { useState, useRef } from 'react';
import Chessground from './Chessground';
import SparePieces from './SparePieces';
import addPiece from '../functions/add-piece';

const PositionSetup = ({ initial = '8/8/8/8/8/8/8/8', ...props }) => {
  const [selected, setSelected] = useState({ role: null, color: null });
  const [fen, setFen] = useState(initial);

  const ref = useRef(null);
  const onSelect = (key) => {
    addPiece(ref.current.board, setFen, selected, key);
  };

  return (
    <div className="board-editor">
      <div className="mb-2">
        <SparePieces
          selected={selected}
          selectPiece={setSelected}
          color="black"
        />
      </div>
      <Chessground
        ref={ref}
        onSelect={onSelect}
        fen={fen}
        viewOnly
        {...props}
      />
      <div className="mt-2">
        <SparePieces
          selected={selected}
          selectPiece={setSelected}
          color="white"
        />
      </div>
    </div>
  );
};

export default PositionSetup;
