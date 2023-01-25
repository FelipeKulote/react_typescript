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

  button {
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
`;

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledPassword = styled.div`
  display: flex;


  button {
    border-radius: 5px;

  }
`
