import React, { useState } from 'react';
import Gauge from 'react-gauge-component';

const Gauge = () => {
  const [value, setValue] = useState(50);

  const increaseValue = () => {
    if (value < 100) {
      setValue(value + 10);
    }
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 10);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-4 p-4 bg-gray-200 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Gauge</h2>
        <Gauge
          value={value}
          width={180}
          height={90}
          max={100}
          color="#007bff"
          label=""
        />
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={increaseValue}
          >
            Increase Value
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={decreaseValue}
          >
            Decrease Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
