import React from 'react';
import "./style.css";

export default function TextInput({ text, name, callback }) {

  return (
    <div className="form__group">
      <label forhtml={text} className="form__label">{text}:
        <input type="text" className="form__input" name={name} onChange={callback} id={text} required />
      </label>
    </div>
  )
}
