import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  color: #f74002;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 20px;
  margin-top: 5px;

  &:hover {
    border: 1px solid #f74002;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #f74002;
  }
`;

export const Btn = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: #f74002;
  padding: 7px 10px;
  border: transparent;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 40%;
`;
