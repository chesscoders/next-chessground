import React from 'react';
import { SparePiece } from '.';

const SparePieces = (props) => {
  const roles = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'];
  const showPiece = (role, props) => {
    const { color = 'white', selected = { role: null, color: null } } = props;
    const highlighted = role === selected.role && color === selected.color;

    return (
      <SparePiece
        key={`${role}-${color}`}
        highlighted={highlighted}
        role={role}
        color={color}
        {...props}
      />
    );
  };

  return (
    <div className="spare-pieces">
      {roles.map((role) => showPiece(role, props))}
    </div>
  );
};

export default SparePieces;