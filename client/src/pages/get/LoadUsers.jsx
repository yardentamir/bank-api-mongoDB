import React, { useState, useEffect } from 'react';
import Card from "../../components/Card/Card";
import { Flex } from "../../components/styles/Flex.styled";
import { Container } from "../../components/styles/Container.styled"
import myApi from "../../api/Api";

export default function LoadUsers() {
  const [users, setUsers] = useState();
  const [avatarExp, setAvatarExp] = useState();

  const loadUsers = async () => {
    try {
      const { data } = await myApi.get("/users/loadUsers");
      setUsers(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  const avatarExpFunc = async () => {
    try {
      const { data } = await myApi.get(`users/61ee7b8381f30d9aa8ca2c5b/avatar`);
      setAvatarExp(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    loadUsers();
    avatarExpFunc();
  }, [])

  const renderUsers = () => {
    return users.map((user) => {
      return <Card key={user._id} id={user._id} title={user.name} cash={user.cash} credit={user.credit} isActive={user.isActive.toString()} />
    })
  }

  return (
    <Container>
      {users &&
        <Flex>
          {renderUsers()}
        </Flex>
      }
      {avatarExp && <img src={`data:image/png;base64,${avatarExp}`} alt="avatar" width="100" height="100" />}
    </Container>
  )
}