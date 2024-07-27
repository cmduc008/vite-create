import { data } from "../../data";
import React, { useState } from "react";
const UseStateArray = () =>{
     const [subject, setsubject] = React.useState(data);
    const removeItem = (id) => {
    let newsubject = subject.filter((language) => language.id !== id);
    setsubject(newsubject);
  };
  return (
    <div>
        <h1>useState-Array</h1>
      {subject.map((language) => {
        const { id, name } = language;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove {name}</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setsubject([])}
      >
        Clear ALL
      </button>
    </div>
  );
};

export default UseStateArray