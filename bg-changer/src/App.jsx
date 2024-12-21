import React, { useState } from 'react';
import BackgroundChanger from './BackgroundChanger';

function App() {
  const [bgColor, setBgColor] = useState('bg-blue-500');

  return (
    <div className="App">
      <BackgroundChanger bgColor={bgColor} />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
        <button
          onClick={() => setBgColor('bg-blue-500')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Blue
        </button>
        <button
          onClick={() => setBgColor('bg-red-500')}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor('bg-green-500')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
