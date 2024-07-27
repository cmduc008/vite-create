import React from "react"
const UseStateObject = () =>{
    const[people, setPerson]=React.useState({
        name:'Duc',
        age:24,
        favorite:'Chicken'
    })
    const displayPerson = () =>{
        setPerson({name:'Lam',age:28,favorite:'Pizza'});
    }   
    // const displayPerson = () =>{
    //     setPerson({name:'Lam',age:28,favorite:'Pizza'});
    // }

    return(
        <>
        <h1>useState - Object</h1>
        <h3>Name is : {people.name}</h3>
        <h3>Age : {people.age}</h3>
        <h4>Favorie : {people.favorite}</h4>
        <button type="button" className="btn" onClick={displayPerson}>Set New Person</button>
        </>
    )
}


export default UseStateObject