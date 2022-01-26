import React, { useState } from 'react';
import { Container } from "../../components/styles/Container.styled";
import "./style.css";
import myApi from "../../api/Api";

export default function Home() {

  const [loginDetails, setLoginDetails] = useState({});

  const handleInputChange = ({ target: { name, value } }) => {
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await myApi.post('/users/login', loginDetails);
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <h2>Welcome!</h2>
      <h4>Choose something from the navbar</h4>

      <div className="login">
        <div className="form" onSubmit={login}>
          <form className="login-form">
            <span className="material-icons">lock</span>
            <input name="email" type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={handleInputChange} />
            <input name="password" type="password" placeholder="password" required onChange={handleInputChange} />
            <button>login</button>
          </form>
        </div>
      </div>
    </Container>
  )
}