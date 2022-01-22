import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Flex } from "../../components/styles/Flex.styled";
import { Container } from "../../components/styles/Container.styled";
import { Form } from "../../components/styles/Form.styled";
import myApi from "../../api/Api";

export default function LoadUsersByCash() {
  const [users, setUsers] = useState();
  const [cash, setCash] = useState();

  const loadUserByCash = async () => {
    const { data } = await myApi.get(`/users/loadUserByCash?cash=${cash}`);
    setUsers(data);
  };

  const renderUsers = () => {
    return users.map((user) => {
      return <Card key={user._id} title={user.name} id={user._id} cash={user.cash} credit={user.credit} isActive={user.isActive.toString()} />
    })
  }

  return (
    <Container>
      <Form>
        <TextInput text="cash" callback={({ target }) => setCash(target.value)} />
        <SubmitButton text="Search" callback={loadUserByCash} />
      </Form>
      {users &&
        <Flex>
          {renderUsers()}
        </Flex>
      }
    </Container>
  )
}