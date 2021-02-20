import React, { useState } from "react";
import PasswordButton from "./PasswordButton";
const PasswordForm = () => {

const [password,setPassword]=useState('')
const[length,setLength]=useState(20)
const[uppercase,setUppercase]=useState(false)
const[lowercase,setLowercase]=useState(false)
const[numbers,setNumbers]=useState(false)
const[symbols,setSymbols]=useState(false)

const handleLength=(e)=>{
    setLength(e.target.value)
}
const handleUppercase=(e)=>{
    setUppercase(e.target.checked)
}
const handleLowercase=(e)=>{
    setLowercase(e.target.checked)
}
const handleNumbers=(e)=>{
    setNumbers(e.target.checked)
}
const handleSymbols=(e)=>{
    setSymbols(e.target.checked)
}


  return (
    <div className="container">
      <div className="generator">
        <h2 className="header">Password Generator</h2>
        <div className="password">
          <h3>{password}</h3>
          </div>
          <div className="form">
            <label htmlFor="passwordLength">Password Length</label>
            <input
            defaultValue={length}
            onChange={handleLength}
              type="number"
              id="passwordLength"
              name="passwordLength"
              max="20"
              min="8"
            />
            </div>
            <div className="form">

            <label htmlFor="Uppercase">Include Uppercase letters</label>
            <input 
            checked={uppercase}
            onChange={handleUppercase}
            type="checkbox" 
            id="Uppercase"
            name="Uppercase" 

            />
            </div>
            <div className="form">
            <label htmlFor="lowercase">Include Lowercase letters</label>
            <input 
            checked={lowercase}
            onChange={handleLowercase}
            type="checkbox" 
            id="lowercase" 
            name="lowercase"
             />
            </div>
            <div className="form">
            <label htmlFor="numbers">Include numbers</label>
            <input 
            checked={numbers}
            onChange={handleNumbers}
            type="checkbox" 
            id="numbers" 
            name="numbers"
             />
            </div>
            <div className="form">
            <label htmlFor="symbols">Include symbols</label>
            <input 
            checked={symbols}
            onChange={handleSymbols}
            type="checkbox" 
            id="symbols" 
            name="symbols" 

            />
          </div>
          <PasswordButton  passwordLength={length} setPassword={setPassword} uppercase={ uppercase} lowercase={lowercase} numbers={numbers} symbols={symbols}
          />
      </div>
    </div>
  );
};
export default PasswordForm;
