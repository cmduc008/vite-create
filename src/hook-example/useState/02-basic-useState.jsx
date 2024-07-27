import { useState } from "react";

const BasicExample = () => {
  const[count,setCount]=useState(0)

  const handleClick = () => {
    setCount(count+1)
  };
  const handleClickDr = () => {
    setCount(count-1)
  };
  const handleClickSetText = () => {
    setCount("Text")
  };
  const handleClickReset = () => {
    setCount(0)
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Incre
      </button>
      <button type='button' className="btn" onClick={handleClickDr}>
        Decre
      </button>
      <button type='button' className="btn" onClick={handleClickSetText}>
        Set Text
      </button>
      <button type='button' className="btn" onClick={handleClickReset}>
        Reset number
      </button>
    </div>
  );
};

export default BasicExample;