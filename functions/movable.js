/**
 * Legal chess moves for chessground
 * @param {*} chess
 */
const movable = (chess) => {
  const dests = {};
  chess.SQUARES.forEach((s) => {
    const ms = chess.moves({ square: s, verbose: true });
    if (ms.length) {
      dests[s] = ms.map((m) => m.to);
    }
  });
  const color = chess.turn() === 'w' ? 'white' : 'black';

  return {
    color, // who's turn is it
    dests, // what to move
    free: false,
  };
};

export default movable;
