import { StyledLogin } from "./styled.login";

export function Login() {
  return (
    <div>
      <StyledLogin>
        <h2>LOGIN</h2>
        <input type="text" />
        <input type="password" />
        <button>ENVIAR</button>
      </StyledLogin>
    </div>
  );
}
