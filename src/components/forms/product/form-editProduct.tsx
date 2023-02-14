import { FormEvent, useState } from "react";
import { api } from "../../../utils/api/api";
import { FormCreateProduct } from "./styles";
import { updateProductPayload } from "./types";

export interface UpdateProductsFormProps {
  handleControl: () => void;
  product: updateProductPayload;
}

export function FormEditProduct({ handleControl, product }: UpdateProductsFormProps) {

    const [editProduct, setEditProduct] = useState<any>([]);
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const editedProduct = {
            // id: currentTarget.id,
            title: e.currentTarget.value,
            description: e.currentTarget.value,
            price: parseFloat(e.currentTarget.value),
            image: e.currentTarget.value,
          };

        //   await api.updateProduct({ ...data, id: })
    }
    return(
  <>
    <div>Editar produto</div>
    <FormCreateProduct onSubmit={handleSubmit}>
        <h2>Criação de produto</h2>
        <div>
          <h4>Nome do produto</h4>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            // onChange={(e) => {
            //   setEditProduct({ ...editProduct, title: e.currentTarget.value });
            // }}
            required
          />
          <h4>Descrição</h4>
          <input
            type="text"
            name="description"
            defaultValue={product.description}
            // onChange={(e) => {
            //   setEditProduct({ ...editProduct, description: e.currentTarget.value });
            // }}
            required
          />
          <h4>Preço</h4>
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            // onChange={(e) => {
            //     setEditProduct({ ...editProduct, price: parseFloat(e.currentTarget.value) });
            // }}
            required
          />
          <h4>Selecione uma imagem (URL)</h4>
          <input
            type="text"
            name="image"
            defaultValue={product.image}
            // onChange={(e) => {
            //     setEditProduct({ ...editProduct, image: e.currentTarget.value });
            // }}
            required
          />
        </div>
        <button>Criar</button>
      </FormCreateProduct>
  </>
    )
}
