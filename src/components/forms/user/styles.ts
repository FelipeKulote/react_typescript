import styled from "styled-components";

export const FormCreateUser = styled.form`
  padding: 40px;
  border: 2px solid;
  border-radius: 10px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  input {
    margin: 10px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 100%;
  }

  button {
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
