import { useState, useEffect } from 'react';
export default function Timer({ onTimeExpired}){

    const [time, setTime] = useState(0);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (time < 10) {
          setTime(time + 1);
          setWidth((prevWidth) => prevWidth + 10);
        } else {
            clearInterval(intervalId);
            if (onTimeExpired) {
                setTime(0)
                setWidth(0)
              onTimeExpired();
            }
        }
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [time,onTimeExpired]);
    const progress={ 
      width: `${width}%`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
    }


    return(
        <div className='py-5'>
          <div className="w-[80vw] h-[50px] bg-[#242C4A] mx-auto rounded-full p-1 border-4 border-gray-400">
           { time > 0 ? (<div className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-blue-100 rounded-full text-center h-[100%] font-bold" style={progress}>
              {time}
            </div>) : null
            }
          </div>
      </div>
    );
}

