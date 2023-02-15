import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";
import {
  ButtonsCreate,
  CancelButton,
  CreateButton,
  FormCreateProduct,
} from "./styles";
import { UpdateProductPayload } from "./types";

export interface UpdateProductsFormProps {
  product: UpdateProductPayload;
}

export function FormEditProduct() {
  const navegate = useNavigate();
  const [editProduct, setEditProduct] = useState<UpdateProductPayload>({
    id: "",
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await api.updateProduct(editProduct);
    navegate("/products");
  }

  const params = useParams();

  function getUserInfo() {
    const id: any = params.id;
    if (id) {
      api.getProductById(id).then((response) =>
        setEditProduct({
          id: response.id,
          title: response.title,
          description: response.description,
          price: response.price,
          image: response.image,
        })
      );
    }
  }

  function handleCancelCreate() {
    navegate("/products");
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <FormCreateProduct onSubmit={handleSubmit}>
        <h2>Edição de produto</h2>
        <div>
          <h4>Nome do produto</h4>
          <input
            type="text"
            name="title"
            defaultValue={editProduct.title}
            onChange={(e) => {
              setEditProduct({ ...editProduct, title: e.currentTarget.value });
            }}
            required
          />
          <h4>Descrição</h4>
          <input
            type="text"
            name="description"
            defaultValue={editProduct.description}
            onChange={(e) => {
              setEditProduct({
                ...editProduct,
                description: e.currentTarget.value,
              });
            }}
            required
          />
          <h4>Preço</h4>
          <input
            type="number"
            name="price"
            defaultValue={editProduct.price}
            onChange={(e) => {
              setEditProduct({
                ...editProduct,
                price: parseFloat(e.currentTarget.value),
              });
            }}
            required
          />
          <h4>Selecione uma imagem (URL)</h4>
          <input
            type="text"
            name="image"
            defaultValue={editProduct.image}
            onChange={(e) => {
              setEditProduct({ ...editProduct, image: e.currentTarget.value });
            }}
            required
          />
        </div>
        <ButtonsCreate>
          <CreateButton>Editar</CreateButton>
          <CancelButton onClick={handleCancelCreate}>Cancelar</CancelButton>
        </ButtonsCreate>
      </FormCreateProduct>
    </>
  );
}
