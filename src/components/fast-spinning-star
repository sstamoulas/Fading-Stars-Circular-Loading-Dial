import React, { useState, useEffect } from 'react';

const FastSpinningStar = () => {
  const [deg, setDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(deg >= 359) {
        setDegree(0);
      }
      else {
        setDegree(deg + 1)
      }
    }, 0);

    return () => clearInterval(interval);
  }, [deg]);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500"
      style={{height: '100vh', width: '100vw', display: 'block', margin: '0 auto'}}
    >
      <path d="M60 50 l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" transform={`scale(4) rotate(${deg} 60 62.5)`}/>
    </svg>
  );
}

export default FastSpinningStar;
