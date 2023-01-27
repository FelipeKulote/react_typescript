import { FormEvent, useState } from "react";
import { FormCreateUser } from "./styles";

export function FormUser() {
  const [newUser, setNewUser] = useState();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // await api.createUser(newUser);
  }

  return (
    <div>
      <FormCreateUser onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <div>
          <h4>Nome</h4>
          <input type="text" />
          <h4>E-mail</h4>
          <input type="text" />
          <h4>Senha</h4>
          <input type="password" />
          <h4>Confirme sua senha</h4>
          <input type="password" />
          <h4>CPF</h4>
          <input type="text" />
          <h4>Selecione uma imagem (URL)</h4>
          <input type="text" />
        </div>
        <button>Criar</button>
      </FormCreateUser>
    </div>
  );
}
