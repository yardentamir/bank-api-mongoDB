import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Flex } from "../../components/styles/Flex.styled";
import { Container } from "../../components/styles/Container.styled";
// import { Form } from "../../components/styles/Form.styled";
import myApi from "../../api/Api";

export default function LoadUsers() {
  const [addedUser, setAddedUser] = useState();
  const [newUser, setNewUser] = useState({});

  const AddUser = async () => {
    try {
      const { data } = await myApi.post("/users/addUser", newUser);
      setAddedUser(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleInputChange = ({ target: { name, value } }) => {
    if (value === "true" || value === "false") {
      value = value === "true";
    } else if (Number(value)) {
      value = +value;
    }
    setNewUser({ ...newUser, [name]: value });
  }

  // const handelFileUpload = async ({ target }) => {
  //   console.log(target.files[0]);
  //   const { data } = await myApi.post("/users/uploadAvatar", target.files[0]);
  //   console.log(data)
  // }

  const renderUser = () => {
    return <Card key={addedUser._id} title={addedUser.name} id={addedUser._id} cash={addedUser.cash} credit={addedUser.credit} isActive={addedUser.isActive.toString()} />
  }

  const renderInputs = () => {
    const keys = ["name", "cash", "credit", "isActive"];
    return keys.map(key => {
      return <TextInput key={key} text={key} name={key} callback={handleInputChange} />
    })
  }

  return (
    <Container>
      {/* <Form> */}
      <form action="http://localhost:5000/api/users/uploadAvatar" method="post" encType="multipart/form-data">
        {renderInputs()}
        <input type="file" name="avatar" />
        <SubmitButton text="Add User" callback={AddUser} />
      </form>
      {/* </Form> */}
      {addedUser &&
        <Flex>
          {renderUser()}
        </Flex>
      }
    </Container>
  )
}