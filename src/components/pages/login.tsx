import { FormEvent, useState } from "react";
import { StyledLogin } from "./styled.login";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { api } from "../../utils/api/api";

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const userData = await api.login(loginPayload);

    console.log(userData)
  }

  return (
    <div>
      <StyledLogin onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input type="text" placeholder="E-mail" name="email" required />
        <div>
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Senha"
            name="password"
            required
          />
          <button onClick={handleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit">ENVIAR</button>
      </StyledLogin>
    </div>
  );
}
