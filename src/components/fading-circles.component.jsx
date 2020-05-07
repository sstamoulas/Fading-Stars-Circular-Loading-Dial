import React, { useState, useEffect } from 'react';

const FadingCircles = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(opacity >= 1) {
        setOpacity(0);
      }
      else {
        setOpacity(opacity + 0.05);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500"
      style={{height: '50vh', width: '50vw', display: 'block', margin: '0 auto'}}
    >
      <circle cx="100" cy="250" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.95) % 1}`}} />
      <circle cx="106" cy="208" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.90) % 1}`}}/>
      <circle cx="130" cy="160" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.85) % 1}`}}/>
      <circle cx="160" cy="130" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.80) % 1}`}} />

      <circle cx="208" cy="106" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.75) % 1}`}} />
      <circle cx="250" cy="100" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.70) % 1}`}} />
      <circle cx="292" cy="106" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.65) % 1}`}} />
      <circle cx="340" cy="130" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.60) % 1}`}} />

      <circle cx="370" cy="160" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.55) % 1}`}} />
      <circle cx="394" cy="208" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.50) % 1}`}} />
      <circle cx="400" cy="250" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.45) % 1}`}} />
      <circle cx="394" cy="292" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.40) % 1}`}} />

      <circle cx="370" cy="340" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.35) % 1}`}} />
      <circle cx="340" cy="370" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.30) % 1}`}} />
      <circle cx="292" cy="394" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.25) % 1}`}} />
      <circle cx="250" cy="400" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.20) % 1}`}} />

      <circle cx="208" cy="394" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.15) % 1}`}} />
      <circle cx="160" cy="370" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.10) % 1}`}} />
      <circle cx="130" cy="340" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.05) % 1}`}} />
      <circle cx="106" cy="292" r="10" stroke="black" strokeWidth="3" fill="transparent" style={{opacity: `${(opacity + 0.00) % 1}`}} />

      <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="2px" dy=".5em" style={{fontSize: '40px'}}>Loading</text>
      <text x={`${65 + (opacity <= .3 ? 1 : opacity <= .6 ? 2 : 3)}%`} y="50%" textAnchor="middle" stroke="#000" strokeWidth="2px" dy=".5em" style={{fontSize: '40px'}}>
        {opacity === 0 ? '' : opacity <= .3 ? '.' : opacity <= .6 ? '..' : '...'}
      </text>
    </svg>
  );
}

export default FadingCircles;
