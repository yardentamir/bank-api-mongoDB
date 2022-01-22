import React, { useState, useEffect } from 'react';
import Card from "../components/Card/Card";
import { Flex } from "../components/styles/Flex.styled";
import { Container } from "../components/styles/Container.styled"
import myApi from "../api/Api";

export default function LoadUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await myApi.get("/users/loadUsers");
      setUsers(data);
    };
    loadUsers();
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
    </Container>
  )
}