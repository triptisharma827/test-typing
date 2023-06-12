import React, { useEffect, useState } from 'react';

function KeyOutput(){
  const [randomLetter, setRandomLetter] = useState('');
  const [letter,setLetter] = useState('');

  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return randomNumber;
  }

  function getRandomLetter() {
    const randomNumber = getRandomNumber();
    let randomLetter = '';
    switch (randomNumber) {
      case 1:
        randomLetter = 'a';
        break;
      case 2:
        randomLetter = 's';
        break;
      case 3:
        randomLetter = 'd';
        break;
      case 4:
        randomLetter = 'f';
        break;
      case 5:
        randomLetter = 'j';
        break;
      case 6:
        randomLetter = 'k';
        break;
      case 7:
        randomLetter = 'l';
        break;
      case 8:
        randomLetter = ';';
        break;
      default:
        randomLetter = 'a';
        break;
    }
    setLetter(randomLetter);
  }

  function updateColor() {
    const newRandomLetter = getRandomLetter();
    setRandomLetter(newRandomLetter);
  }

  useEffect(() => {
    const interval = setInterval(updateColor, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='parent-div'>
        <h1 className='bigHeading' >Your Touch-typing Guide</h1>
      <div className='letter-display'><h1 className='letter'>{letter}</h1></div>
    </div>
  );
};

export default KeyOutput;
