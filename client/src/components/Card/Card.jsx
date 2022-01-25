import React, { useState, useEffect } from 'react';
import "./style.css";
import myApi from "../../api/Api";

export default function Card({ id, title, cash, credit, isActive }) {

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    async function loadAvatar(id) {
      try {
        const { data } = await myApi.get(`users/${id}/avatar`);
        console.log(data)
        if (data) setAvatar(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    loadAvatar(id);
  }, [id])


  return (
    <div className="card">
      <div className="card-content">
        <img src={avatar ? `data:image/png;base64,${avatar}` : `../../assets/0faef0eb-57b4-4352-9d9e-0d684b5334a2.jpg`} alt="avatar" />
        <h2 className="title">{title}</h2>
        <p>id: {id}</p>
        <p>cash: {cash}</p>
        <p>credit: {credit}</p>
        <p>isActive: {isActive}</p>
      </div>
    </div>
  )
}
