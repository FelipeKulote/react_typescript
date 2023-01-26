import styled from "styled-components";

export const StyledLoginPage = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LoginForm = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  height: 500px;
  border: 2px solid white;

  h2 {
    margin: 20px;
    font-size: 2rem;
  }

  h4 {
    margin-top: 30px;
  }

  input {
    padding: 8px;
    display: flex;
    width: 90%;
    margin: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1.3rem;
  }

  div {
    display: flex;
    width: 90%;
    margin: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1.3rem;

    input {
      border-radius: 5px 0 0 5px;
      margin: 0;
    }

    button {
      border-radius: 0 5px 5px 0;
      background-color: white;
      padding: 10px;
      cursor: pointer;
    }
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  background: transparent;
  cursor: default;
`;
