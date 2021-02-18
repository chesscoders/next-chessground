import { Formik } from 'formik';
import React from 'react';
import { PositionSetup } from '../components';

const editor = () => {
  return (
    <main className="min-h-screen px-4 py-8 flex flex-col items-center justify-center">
      <div className="flex flex-col w-full px-4 lg:px-4 py-8 my-8 bg-white rounded-lg max-w-xl">
        <Formik
          initialValues={{
            fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            side: 'w',
          }}
        >
          <PositionSetup />
        </Formik>
      </div>
    </main>
  );
};

export default editor;
