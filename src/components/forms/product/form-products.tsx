import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { FormCreateProduct } from "./styles";

export type ProductPayload = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export function FormProduct() {
  const [newProduct, setNewProduct] = useState<any>([]);
  const navegate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
      await api.createProduct(newProduct);
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
              setNewProduct({ ...newProduct, title: e.target.value });
            }}
            required
          />
          <h4>Descrição</h4>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setNewProduct({ ...newProduct, description: e.target.value });
            }}
            required
          />
          <h4>Preço</h4>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              setNewProduct({ ...newProduct, price: e.target.value });
            }}
            required
          />
          <h4>Selecione uma imagem (URL)</h4>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setNewProduct({ ...newProduct, image: e.target.value });
            }}
            required
          />
        </div>
        <button>Criar</button>
      </FormCreateProduct>
    </div>
  );
}
