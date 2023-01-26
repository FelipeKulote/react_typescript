import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { StyledCard, StyledImage, StyledPageProduct } from "./styles";

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
    <StyledPageProduct>
      <h2>Produtos</h2>
      <StyledCard>
      {
        listProducts.map((product) => (
            <div key={product.id}>
                <StyledImage src={product.image} alt="Imagem do produto" />
                <h3>{product.title}</h3>
                <h5>{product.description}</h5>
                <h4>{product.price},00</h4>
            </div>
        ))
      }
      </StyledCard>
    </StyledPageProduct>
  );
}
