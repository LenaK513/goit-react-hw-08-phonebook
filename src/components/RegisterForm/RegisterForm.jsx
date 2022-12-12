import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Btn,
  Image,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.elements.name.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);

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
      <div>
        <Title>Let's go! Registration is right here!</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            UserName
            <Input type="text" name="name" autoComplete="off"></Input>
          </Label>
          <Label>
            Email
            <Input type="email" name="email" autoComplete="off"></Input>
          </Label>
          <Label>
            Password
            <Input type="password" name="password" autoComplete="off"></Input>
          </Label>
          <Btn type="submit">Register</Btn>
        </Form>
      </div>

      <Image src={require('images/sugar.jpg')} alt="" />
    </Wrapper>
  );
};
