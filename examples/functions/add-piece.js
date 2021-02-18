/**
 * Add a piece to a Chessground board
 */
const addPiece = (cg, updateFen, selected, key) => {
  if (!cg || !selected) {
    return false;
  }

  if ([...cg.state.pieces.keys()].includes(key)) {
    console.log('here');
    if (
      cg.state.pieces.get(key).color === selected.color &&
      cg.state.pieces.get(key).role === selected.role
    ) {
      cg.state.pieces.delete(key);
    } else {
      cg.state.pieces.set(key, selected);
    }
  } else {
    cg.newPiece(selected, key);
  }

  if (typeof updateFen === 'function') {
    updateFen(cg.getFen());
  }
};

export default addPiece;
