import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ee4d64;

  letter-spacing: 0.02em;
  -webkit-font-smoothing: antialiased;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  background-color: #ffffff;
  width: 400px;
  border-radius: 4px;

  label {
    align-self: flex-start;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #444;
  }

  img {
    max-width: 50%;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #444;

  ::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: #ee4d64;
  color: #ffffff;
  font-weight: 700;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: ${lighten(0.04, '#ee4d64')};
  }
`;

export const Message = styled.p.attrs(props => ({
  error: false,
}))`
  color: ${props => (props.error ? '#ee4d64' : '#999')};
`;
