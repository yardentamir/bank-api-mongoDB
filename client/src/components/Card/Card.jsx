import React, { useState, useEffect } from 'react';
import "./style.css";
import myApi from "../../api/Api";

export default function Card({ id, title, cash, credit, isActive }) {

  const [avatar, setAvatar] = useState();

  const loadAvatar = async (id2) => {
    try {
      const { data } = await myApi.get(`users/${id2}/avatar`);
      if (data) setAvatar(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    loadAvatar(id);
  }, [id])


  return (
    <div className="card">
      <div className="card-content">
        <img src={avatar ? `data:image/png;base64,${avatar}` : ""} alt="avatar" />
        <h2 className="title">{title}</h2>
        <p>id: {id}</p>
        <p>cash: {cash}</p>
        <p>credit: {credit}</p>
        <p>isActive: {isActive}</p>
      </div>
    </div>
  )
}
