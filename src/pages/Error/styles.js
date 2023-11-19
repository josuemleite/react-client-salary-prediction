import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(20, 56, 134, 0.6);
    padding: 20px 40px;
    border-radius: 10px;
    width: 512px;
    text-align: left;

  h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  .form-control {
    margin: 20px 0 40px;
    width: 100%;
  }

  .form-control select,
  .form-control input {
    background-color: rgba(255, 255, 255, 0.5);
    border: 0;
    border-radius: 5px;
    display: block;
    width: 100%;
    font-size: 18px;
    padding: 15px;
    color: #003366;
    margin-bottom: 10px;
  }

  .form-control label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: #003366;
  color: #fff;
  padding: 15px;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  margin-top: 20px;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.95);
  }
`;