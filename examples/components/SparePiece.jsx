import React from 'react';

const SparePiece = ({ role, color, highlighted, selectPiece }) => {
  const classes = ['edit-square border border-gray-400 rounded mr-2'];
  if (highlighted) {
    classes.push('bg-orange-300');
  }

  const clickSpare = () => {
    if (typeof selectPiece === 'function') {
      highlighted
        ? selectPiece({ role: null, color: null })
        : selectPiece({ role, color });
    }
  };

  return (
    <div className={classes.join(' ')}>
      <piece
        className={`${role} ${color} spare-piece`}
        onClick={clickSpare}
      ></piece>
    </div>
  );
};

export default SparePiece;
