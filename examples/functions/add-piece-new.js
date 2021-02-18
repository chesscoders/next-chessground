/**
 * Add a piece to a Chessground board
 * !!! Use this function on newer Chessground packages !!!
 */
const addPiece = (cg, updateFen, selected, key) => {
  if (!cg || !selected) {
    return false;
  }

  if (Object.keys(cg.state.pieces).includes(key)) {
    if (
      cg.state.pieces[key].color === selected.color &&
      cg.state.pieces[key].role === selected.role
    ) {
      delete cg.state.pieces[key];
    } else {
      cg.state.pieces[key] = selected;
    }
  } else {
    cg.newPiece(selected, key);
  }

  if (typeof updateFen === 'function') {
    updateFen(cg.getFen());
  }
};

export default addPiece;
