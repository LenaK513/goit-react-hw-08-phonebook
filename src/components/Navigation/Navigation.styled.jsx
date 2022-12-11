import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItemStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #343333;
  &:hover,
  &:focus {
    color: #f74002;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-left: 20px;
`;
