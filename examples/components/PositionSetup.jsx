import React, { useState, useEffect } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { FieldSet, Input } from './forms';
import { ChessGroundEditor } from '.';

const PositionSetup = () => {
  const { values, setFieldValue } = useFormikContext();
  const clear = '8/8/8/8/8/8/8/8 w - - 0 1';
  const start = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  const [initialPosition, setInitial] = useState(start);
  const [side, setSide] = useState('w');

  useEffect(() => {
    setInitial((prev) => {
      let temp = prev.split(' ');
      temp[1] = side;
      temp = temp.join(' ');
      setFieldValue('fen', temp);
      return temp;
    });
  }, [side]);

  useEffect(() => {
    setInitial(values.fen);
  }, [values.fen]);

  useEffect(() => {
    setSide(values.side);
  }, [values.side]);

  const getPosition = (current) => {
    setFieldValue('fen', current);
  };

  const pickSide = (side) => {
    setFieldValue('side', side);
  };

  return (
    <div className="justify-center">
      <div className="flex flex-row">
        <div className="w-2/3">
          <ChessGroundEditor
            side={side}
            fen={initialPosition}
            initial={initialPosition}
            getPosition={getPosition}
          />
        </div>
        <div>
          <fieldset className="mt-2">
            <label className="inline-flex items-center mr-6">
              <input
                className="form-radio"
                type="radio"
                name="side"
                value="w"
                checked={values.side === 'w'}
                onChange={(event) => pickSide(event.target.value)}
              />
              <span className="ml-2">White to move</span>
            </label>

            <label className="inline-flex items-center mr-6">
              <input
                className="form-radio"
                type="radio"
                name="side"
                value="b"
                checked={values.side === 'b'}
                onChange={(event) => pickSide(event.target.value)}
              />
              <span className="ml-2">Black to move</span>
            </label>
          </fieldset>
        </div>
      </div>
      <Form>
        <FieldSet
          name="fen"
          className="flex-1 p-2 bg-yellow-200 m-2"
          label={<div className="text-gray-800 mb-0 text-sm">FEN</div>}
        >
          <Field name="fen" as={Input} />
        </FieldSet>
      </Form>
      <button
        className="m-2 p-2 bg-blue-300"
        onClick={() => setFieldValue('fen', start)}
      >
        Start
      </button>
      <button
        className="m-2 p-2 bg-blue-300"
        onClick={() => setFieldValue('fen', clear)}
      >
        Clear
      </button>
    </div>
  );
};

export default PositionSetup;
