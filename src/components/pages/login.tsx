import { FormEvent } from "react";
import { StyledLogin } from "./styled.login";

export function Login() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayload);
  }

  return (
    <div>
      <StyledLogin onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input type="text" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <button type="submit">ENVIAR</button>
      </StyledLogin>
    </div>
  );
}
