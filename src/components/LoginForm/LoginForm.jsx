import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
