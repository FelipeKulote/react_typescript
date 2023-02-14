import { FormEvent, useState } from "react";
import { InputProps, Products } from "./types";

export interface UpdateProductsFormProps {
  handleControl: () => void;
}

export function FormEditProduct({ handleControl }: UpdateProductsFormProps) {

    const [editProduct, setEditProduct] = useState<Products>();
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const editedProduct = {
            // id: currentTarget.id,
            title: e.currentTarget.value,
            description: e.currentTarget.value,
            price: e.currentTarget.value,
            image: e.currentTarget.value,
          };
    }
    return(
  <>
    <div>Editar produto</div>
    <section>
        
    </section>
  </>
    )

  //     <div>
  //   <FormCreateProduct onSubmit={handleSubmit}>
  //     <h2>Criação de produto</h2>
  //     <div>
  //       <h4>Nome do produto</h4>
  //       <input
  //         type="text"
  //         name="title"
  //         onChange={(e) => {
  //           setNewProduct({ ...newProduct, title: e.target.value });
  //         }}
  //         required
  //       />
  //       <h4>Descrição</h4>
  //       <input
  //         type="text"
  //         name="description"
  //         onChange={(e) => {
  //           setNewProduct({ ...newProduct, description: e.target.value });
  //         }}
  //         required
  //       />
  //       <h4>Preço</h4>
  //       <input
  //         type="number"
  //         name="price"
  //         onChange={(e) => {
  //           setNewProduct({ ...newProduct, price: e.target.value });
  //         }}
  //         required
  //       />
  //       <h4>Selecione uma imagem (URL)</h4>
  //       <input
  //         type="text"
  //         name="image"
  //         onChange={(e) => {
  //           setNewProduct({ ...newProduct, image: e.target.value });
  //         }}
  //         required
  //       />
  //     </div>
  //     <button>Criar</button>
  //   </FormCreateProduct>
  // </div>
}
