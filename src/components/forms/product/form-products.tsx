import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { ButtonsCreate, CancelButton, CreateButton, FormCreateProduct } from "./styles";

export function FormProduct() {
  const [newProduct, setNewProduct] = useState<any>([]);
  const navegate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.createProduct(newProduct);
    navegate("/products");
  }

  function handleCancelCreate() {
    navegate("/products");
  }

  return (
    <div>
      <FormCreateProduct onSubmit={handleSubmit}>
        <h2>Criação de produto</h2>
        <div>
          <h4>Nome do produto</h4>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setNewProduct({ ...newProduct, title: e.currentTarget.value });
            }}
            required
          />
          <h4>Descrição</h4>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                description: e.currentTarget.value,
              });
            }}
            required
          />
          <h4>Preço</h4>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.currentTarget.value),
              });
            }}
            required
          />
          <h4>Selecione uma imagem (URL)</h4>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setNewProduct({ ...newProduct, image: e.currentTarget.value });
            }}
            required
          />
        </div>
        <ButtonsCreate>
          <CreateButton>Criar</CreateButton>
          <CancelButton onClick={handleCancelCreate}>Cancelar</CancelButton>
        </ButtonsCreate>
      </FormCreateProduct>
    </div>
  );
}
