import React, { useState } from 'react';


function App() {
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setcTime] = useState(newTime);
  // let count = 1;
  const UpdatedTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setcTime(newCTime)
  };
  setInterval(UpdatedTime, 100);
  // console.log(cTime[9]+cTime[10])
  return (
    <>
      <div className="flex items-center h-[90vh] justify-center">
        <div className="flex  border-4 border-slate-700 rounded-lg mx-1 text-white text-center text-[11vh]">{cTime[0] + cTime[1]}</div>
        
        
        <div className="flex mx-1 justify-center word-wrap whitespace-pre-wrap ">
          <div className='text-[2.5rem] text-white word-wrap'>.<br />.</div>
        </div>


        <div className="flex border-4 border-slate-700 rounded-lg mx-1 text-white text-center text-[11vh]">{cTime[3] + cTime[4]}</div>
        
        
        <div className="inline-flex mx-1 justify-center  ">
          <div className='text-[2.5rem] text-white word-wrap'>.<br />.</div>
        </div>

        
        <div className="flex  border-4 border-slate-700 rounded-lg mx-1 text-white text-center text-[11vh]">{cTime[6] + cTime[7]}</div>
        <div className="flex ml-2 border-4 border-slate-700 rounded-lg mx-1 text-white text-center text-[11vh]">{cTime[9] + cTime[10]}</div>
      </div>
    </>
  );
}

export default App;
