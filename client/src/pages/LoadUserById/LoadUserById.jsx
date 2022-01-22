import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Flex } from "../../components/styles/Flex.styled";
import { Container } from "../../components/styles/Container.styled";
import { Form } from "../../components/styles/Form.styled";
import myApi from "../../api/Api";

export default function LoadUsersById() {
  const [users, setUsers] = useState();
  const [id, setId] = useState();

  const loadUserById = async () => {
    const { data } = await myApi.get(`/users/loadUserById?id=${id}`);
    console.log(data);
    setUsers(data);
  };


  const renderUser = () => {
    return users.map((user) => {
      return <Card key={user._id} title={user.name} id={user._id} cash={user.cash} credit={user.credit} isActive={user.isActive.toString()} />
    })
  }

  return (
    <Container>
      <Form>
        <TextInput text="id" callback={({ target }) => setId(target.value)} />
        <SubmitButton text="Search" callback={loadUserById} />
      </Form>
      {users &&
        <Flex>
          {renderUser()}
        </Flex>
      }
    </Container>
  )
}