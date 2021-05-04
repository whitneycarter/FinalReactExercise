// 2a
import MCUShows from './mcu-shows/MCUShows'

// 6a & 8a
import { useState, useEffect } from 'react'

// 5a
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  hawkeye: 'Fall of 2021'
}

// 6b
const avengers = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Hawkeye'
];

function App() {
  // 6c
  const [index, setIndex] = useState(0);

  // 7a
  const [num, setNum] = useState(0);

  // 8a
  // The function passed into the useEffect function/hook will run everytime the state value that is passed into the array (2nd argument) is updated. (NOTE: If nothing is passed in for a second argument, then the function will run whenever any state values are updated.)
  useEffect(() => {
    alert('The Next Avenger has been displayed');
  }, [num]);

  // 6f
  const randomAvenger = () => {
    setIndex(Math.floor(Math.random() * avengers.length));
  }

  // 7d
  const nextAvenger = () => {
    (num === (avengers.length - 1)) ? setNum(0) : setNum(num + 1);
  }

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c & 5b */}
      <MCUShows
        dates={releaseDates}
        // 6f
        randomAvenger={randomAvenger}
        // 7d
        nextAvenger={nextAvenger}
      />
      {/* 6d & 6f */}
      <h1>Random Avenger: {avengers[index]}</h1>
      {/* 7b & 7d */}
      <h1>Next Avenger: {avengers[num]}</h1>
    </div>
  );
}

export default App;
