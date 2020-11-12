/**
 * Add a piece to a Chessground board
 */
const addPiece = (ref, updateFen, selected, key) => {
  if (!ref || !selected) {
    return false;
  }

  if (Object.keys(ref.state.pieces).includes(key)) {
    if (
      ref.state.pieces[key].color === selected.color &&
      ref.state.pieces[key].role === selected.role
    ) {
      delete ref.state.pieces[key];
    } else {
      ref.state.pieces[key] = selected;
    }
  } else {
    ref.newPiece(selected, key);
  }

  updateFen(ref.getFen());
};

export default addPiece;
