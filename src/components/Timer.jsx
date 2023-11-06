import { useState, useEffect } from 'react';

export default function Timer({ onTimeExpired, resetTimer }) {
  const [time, setTime] = useState(0); // Start the timer at 0
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time < 10) {
        setTime((prevTime) => prevTime + 1); // Increase time by 1
        setWidth((prevWidth) => prevWidth + 10);
      } else {
        clearInterval(intervalId);
        if (onTimeExpired) {
          setTime(0);
        setWidth(0);
          onTimeExpired();
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time, onTimeExpired, resetTimer]);

  useEffect(() => {
    if (resetTimer) {
      // Reset the timer to 0 when resetTimer changes
      setTime(0);
      setWidth(0);
    }
  }, [resetTimer]);

  const progress = {
    width: `${width}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="py-5">
      <div className="w-[80vw] h-[50px] bg-[#242C4A] mx-auto rounded-full p-1 border-4 border-gray-400">
        { time < 10 && time >0 ? (
          <div className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-blue-100 rounded-full text-center h-[100%] font-bold" style={progress}>
            {time}
          </div>
        ) : null}
      </div>
    </div>
  );
}
