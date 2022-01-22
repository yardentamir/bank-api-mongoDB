import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Flex } from "../../components/styles/Flex.styled";
import { Container } from "../../components/styles/Container.styled";
import { Form } from "../../components/styles/Form.styled";
import myApi from "../../api/Api";

export default function LoadUsers() {
  const [user, setUser] = useState();
  const [amount, setAmount] = useState({});
  const [userId, setUserId] = useState('');

  const deposit = async () => {
    const { data } = await myApi.put(`/users/updateCredit?id=${userId}`, amount);
    console.log(data)
    setUser(data);
  };

  const handleAmount = ({ target: { name, value } }) => {
    setAmount({ [name]: +value });
  }

  const renderUser = () => {
    console.log(user)
    return <Card key={user._id} title={user.name} id={user._id} cash={user.cash} credit={user.credit} isActive={user.isActive.toString()} />
  }

  return (
    <Container>
      <Form>
        <h2>Enter User Id and how much to Update The Credit</h2>
        <TextInput key="creditId" text="id" name="id" callback={({ target }) => setUserId(target.value)} />
        <TextInput key="updateCredit" text="credit" name="credit" callback={handleAmount} />
        <SubmitButton text="Update Credit" callback={deposit} />
      </Form>
      {user &&
        <Flex>
          {renderUser()}
        </Flex>
      }
    </Container>
  )
}