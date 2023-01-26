import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api/api";

export function FormUser() {
    const [newUser, setNewUser] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    // await api.createUser(newUser);
    setLoading(false);
  }

  useEffect(() => {

  }, [loading]);

  return (
  <div>
    <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <h3>Nome</h3>
        <input type="text" />
        <h3>Senha</h3>
        <input type="password" />
        <h3>Confirme sua senha</h3>
        <input type="password" />
        <h3>CPF</h3>
        <input type="text" />
        <h3>Selecione uma imagem (URL)</h3>
        <input type="text" />
    </form>
  </div>
  )
}