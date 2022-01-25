import React from 'react';
import "./style.css";

export default function TextInput({ text, callback }) {

  return (
    <button type="submit" className='button' onClick={callback}>{text}</button>
  )
}
