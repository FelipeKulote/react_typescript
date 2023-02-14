export type ProductPayload = {
    title: string;
    description: string;
    price: number;
    image: string;
  };

  export type updateProductPayload = {
    id: string;
    title?: string;
    description?: string;
    price?: number;
    image?: string;
  };

// export type Products = {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
// };

export interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  defaultValue?: string;
}
