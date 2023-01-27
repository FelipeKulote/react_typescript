import styled from "styled-components";

export const StyledPageProduct = styled.div`
  height: 100%;

  h2 {
    font-size: 2rem;
    margin-top: 20px;
    text-align: center;
  }

  input {
    margin: 20px;
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 5px;
    border: none;
  }
`;

export const Styledconfig = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    cursor: pointer;
    background-color: transparent;
  }
`

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

export const ConfigButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    padding: 3px;
    border: none;
    border-radius: 2px;
    cursor: pointer
  }
`

export const AddProduto = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 100px;
  cursor: pointer;
`
