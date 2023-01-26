import styled from "styled-components";

export const StyledPageProduct = styled.div`
  height: 100%;

  h2 {
    font-size: 2rem;
    margin-top: 20px;
    text-align: center;
  }

  input {
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 5px;
    border: none;
  }
`;

export const StyledCard = styled.div`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    padding: 10px;
    border: 1px solid;
  }

  h3 {
    padding: 10px;
  }

  h4 {
    padding: 10px;
    font-style: italic;
    text-align: end;
  }
`;

export const StyledImage = styled.img`
  max-width: 200px;
`;
