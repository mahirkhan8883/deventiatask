import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  // Function to simulate progress increase
  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  // Function to reset progress
  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-4 p-4 bg-gray-200 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Progress Bar</h2>
        <div className="bg-blue-500 h-8 rounded-full">
          <div
            className="bg-blue-700 h-full rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>
        <p className="mt-4">Progress: {progress}%</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={increaseProgress}
          >
            Increase Progress
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetProgress}
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
