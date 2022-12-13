import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Btn,
  Image,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Wrapper>
      <Image src={require('images/14_3.jpg')} alt="" />
      <div>
        <Title>Here you go, Login ;)</Title>
        <Form onSubmit={handleSubmit} autoComplete="on">
          <Label>
            Email
            <Input type="email" name="email" autoComplete="on"></Input>
          </Label>
          <Label>
            Password
            <Input type="password" name="password" autoComplete="on"></Input>
          </Label>
          <Btn type="submit">Log In</Btn>
        </Form>
      </div>
    </Wrapper>
  );
};
