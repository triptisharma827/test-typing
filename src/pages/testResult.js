import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TestResult(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyPressCount = searchParams.get('keyPressCount');
  const matchCount = searchParams.get('matchCount');
  const accuracy = ((matchCount/keyPressCount)*100).toFixed(2);
 
  return (
    <div className='parent-div'>
      <h1 className='headingBig'>Working Harder Is Always a Good Idea</h1>
      <div className='resultBox'>
      <div className='row'>
      <div className='outputBox col-6'><img className='img-md' src='https://drive.google.com/uc?id=1oyoyV6EtOsdzzjHp2zBWMAWB3e-o2SJN' alt='count'/><p className='smallTxt'>Total Key Presses: {keyPressCount}</p></div>
      <div className='outputBox col-6'><img className='img-md' src='https://drive.google.com/uc?id=1AJQx3vJHAEswg5tJqonl0ecmH94N_17h' alt='accuracy'/><p className='smallTxt'>Accuracy: {accuracy} %</p></div>
      </div>
      </div>
    </div>
  );
};

export default TestResult;
