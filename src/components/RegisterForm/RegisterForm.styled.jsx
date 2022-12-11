import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-left: 20px;
`;

export const Title = styled.h2`
  color: #f74002;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 20px;
  border: 1 px solid transparent;

  border:hover,
  border:focus {
    color: #f74002;
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
