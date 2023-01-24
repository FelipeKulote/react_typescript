import { FormEvent, useState } from "react";
import { LoginForm, StyledLogin, StyledLoginPage } from "./styles";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../utils/loading";

export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const userData = await api.login(loginPayload);
    setLoading(false);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/products");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginPage>
          <LoginForm>
            <h2>LOGIN</h2>
            <input type="text" placeholder="E-mail" name="email" required />
            <StyledLogin onSubmit={handleSubmit}>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Senha"
                name="password"
                required
              />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              </StyledLogin>
            <button type="submit">ENVIAR</button>
            <h4>Já possui uma conta?</h4>
          </LoginForm>
        </StyledLoginPage>
      )}
    </>
  );
}
