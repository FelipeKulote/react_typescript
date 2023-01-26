import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";

export type product = {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
};

export function Products() {
  const [listProducts, setListProducts] = useState<product[]>([]);

  async function findProducts() {
    const products = await api.getProducts();
    setListProducts(products);
  }

  useEffect(() => {
    findProducts();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      {
        listProducts.map((product) => (
            <div key={product.id}>
                <img src={product.image} alt="Imagem do produto" />
                <h2>{product.title}</h2>
                <h4>{product.description}</h4>
                <h3>{product.price}</h3>
            </div>
        ))
      }
    </div>
  );
}
