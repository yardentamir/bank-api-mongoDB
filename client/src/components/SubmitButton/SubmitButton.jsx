import React from 'react';
import "./style.css";

export default function TextInput({ text, callback }) {

  return (
    <div className='button' onClick={callback}>{text}</div>
  )
}
