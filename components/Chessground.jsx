import React, { useState, useEffect, forwardRef } from 'react';
import Wrapper from './Wrapper';

const Chessground = (props, ref) => {
  const { board = 'green', pieces = 'cburnett', ...rest } = props;
  const classes = ['chessground', board, pieces];

  // render pieces to correct squares on window resize
  const [key, setKey] = useState(Math.random());
  useEffect(() => {
    const resize = () => setKey(Math.random());
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  const { viewOnly } = props;
  if (viewOnly) {
    rest.draggable = false;
  }

  return (
    <div key={key} className={classes.join(' ')}>
      <Wrapper ref={ref} {...rest} />
    </div>
  );
};

export default forwardRef(Chessground);
