import { NavItemStyled } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavItemStyled to="/">Home</NavItemStyled>
      {isLoggedIn && <NavItemStyled to="/contacts">Tasks</NavItemStyled>}
    </nav>
  );
};
