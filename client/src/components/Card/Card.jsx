import React from 'react';
import "./style.css";

export default function Card({ id, title, cash, credit, isActive }) {

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title">{title}</h2>
        <p>id: {id}</p>
        <p>cash: {cash}</p>
        <p>credit: {credit}</p>
        <p>isActive: {isActive}</p>
      </div>
    </div>
  )
}
