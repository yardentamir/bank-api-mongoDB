import React, { useState } from 'react';
import Card from "../components/Card/Card";
import TextInput from "../components/TextInput/TextInput";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { Flex } from "../components/styles/Flex.styled";
import { Container } from "../components/styles/Container.styled";
import { Form } from "../components/styles/Form.styled";
import myApi from "../api/Api";

export default function Transfer() {
  const [users, setUsers] = useState();
  const [amount, setAmount] = useState({});
  const [UsersId, setUsersId] = useState({});

  const transfer = async () => {
    const { sender, getter } = UsersId;
    const { data } = await myApi.put(`/users/transfer?sender=${sender}&getter=${getter}`, amount);
    setUsers(data);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setUsersId({ ...UsersId, [name]: value });
  }

  const handleAmountChange = ({ target: { name, value } }) => {
    setAmount({ [name]: +value });
  }

  const renderUsers = () => {
    return users.map((user) => {
      return <Card key={user._id} title={user.name} id={user._id} cash={user.cash} credit={user.credit} isActive={user.isActive.toString()} />
    })
  }

  const renderIdsInputs = () => {
    const keys = ["sender", "getter"];
    return keys.map(key => {
      return <TextInput key={key} text={`${key} id`} name={key} callback={handleInputChange} />
    })
  }

  return (
    <Container>
      <Form>
        {renderIdsInputs()}
        <TextInput key="transferAmount" text="amount" name="amount" callback={handleAmountChange} />
        <SubmitButton text="Transfer" callback={transfer} />
      </Form>
      {users &&
        <Flex>
          {renderUsers()}
        </Flex>
      }
    </Container>
  )
}
