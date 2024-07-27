import { useState } from "react";
import { useEffect } from "react";

const BasicRendering = () =>{
const[loading,setLoading]=useState(true)

const handleClick=()=>{
    setLoading(true)
}

useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },3000)
},[]);

if(loading){
    return (
    <div>
      <h2>Loading.......</h2>
    </div>
    );
    
};


return (
    <div>
<h1>Multiple Returns Basic</h1>
<button type='button' className='btn' onClick={handleClick}>
        Refresh
      </button>
</div>
);

}

export default BasicRendering