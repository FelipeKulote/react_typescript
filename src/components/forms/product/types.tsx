export type Products = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  defaultValue?: string;
}
