import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import {
  ButtonsCreate,
  CancelButton,
  CreateButton,
  FormCreateUser,
} from "./styles";

export type UserPayload = {
  name: string;
  email: string;
  password: string;
  confirmPasswor: string;
  cpf: string;
  image: string;
};

export function FormUser() {
  const [newUser, setNewUser] = useState<any>([]);
  const navegate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.createUser(newUser);
    navegate("/");
  }

  function handleCancelCreate() {
    navegate("/");
  }

  return (
    <div>
      <FormCreateUser onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <div>
          <h4>Nome</h4>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setNewUser({ ...newUser, name: e.target.value });
            }}
            required
          />
          <h4>E-mail</h4>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
            required
          />
          <h4>Senha</h4>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
            required
          />
          <h4>Confirme sua senha</h4>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => {
              setNewUser({ ...newUser, confirmPassword: e.target.value });
            }}
            required
          />
          <h4>CPF</h4>
          <input
            type="text"
            name="cpf"
            onChange={(e) => {
              setNewUser({ ...newUser, cpf: e.target.value });
            }}
            required
          />
          <h4>Selecione uma imagem (URL)</h4>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setNewUser({ ...newUser, image: e.target.value });
            }}
            required
          />
          <h4>Nível de conta</h4>
          <input
            type="text"
            name="role"
            placeholder=""
            onChange={(e) => {
              setNewUser({ ...newUser, role: e.target.value });
            }}
            required
          />
        </div>
        <ButtonsCreate>
          <CreateButton>Criar</CreateButton>
          <CancelButton onClick={handleCancelCreate}>Cancelar</CancelButton>
        </ButtonsCreate>
      </FormCreateUser>
    </div>
  );
}

// export interface InputProps {
//   placeholder: string;
//   type: string;
//   name: string;
//   defaultValue?: string;
// }

// export interface FormProps<T = FormEvent<HTMLFormElement>> {
//   title: string;
//   inputs: InputProps[];
//   onSubmit: (value: T) => void;
//   cancel?: () => void;
// }
// export function FormUser() {
//   const inputOptions: InputProps[] = [
//     {
//       name: "name",
//       type: "text",
//       placeholder: "Nome",
//     },
//     {
//       name: "email",
//       type: "text",
//       placeholder: "E-mail",
//     },
//     {
//       name: "password",
//       type: "password",
//       placeholder: "Senha",
//     },
//     {
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirmar senha",
//     },
//     {
//       name: "CPF",
//       type: "text",
//       placeholder: "CPF",
//     },
//     {
//       name: "image",
//       type: "text",
//       placeholder: "Imagem (URL)",
//     },
//   ];

//   return (
//     <div>
//       <Form
//         title={"Cadastre-se"}
//         inputs={inputOptions}
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       />
//     </div>
//   );
// }
