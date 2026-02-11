import { useState } from "react";

export default function FormElements({ inputLabel, type }) {
    const [value, setValue] = useState("");
  return (
    <div className="form-elements">
        <label htmlFor="input" className="form-elements__label">{inputLabel}</label>
        <input 
            type={type} 
            id="input" 
            className="form-elements__input" 
            value={value} 
            onChange={e => setValue(e.target.value)} />
    </div>
  )
}