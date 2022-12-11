import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Wrapper, Title, Form, Label, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Wrapper>
      <Title>Registration</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          UserName
          <Input type="text" name="name"></Input>
        </Label>
        <Label>
          Email
          <input type="email" name="email"></input>
        </Label>
        <Label>
          Password
          <input type="password" name="password"></input>
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Wrapper>
  );
};
