import React from 'react';

const Piece = ({ role, color, highlighted, selectPiece }) => {
  const classes = ['edit-square'];
  if (highlighted) {
    classes.push('bg-orange-300');
  }

  return (
    <div className={classes.join(' ')}>
      <piece
        className={`${role} ${color} spare-piece`}
        onClick={() => selectPiece({ role, color })}
      ></piece>
    </div>
  );
};

export default Piece;
