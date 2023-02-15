import { useEffect, useState } from "react";
import { FaCog, FaFileMedical } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import {
  AddProduto,
  ConfigButtons,
  DeleteButton,
  EditButton,
  StyledCard,
  Styledconfig,
  StyledImage,
  StyledPageProduct,
} from "./styles";

export type product = {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
};

export function Products() {
  const [listProducts, setListProducts] = useState<product[]>([]);
  const [search, setSearch] = useState("");
  const [config, setConfig] = useState<boolean>(false);
  const [control, setControl] = useState<boolean>(false);

  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();
  const productSelectedData = listProducts.find(
    (product) => product.id === selectedProduct
  );

  function getSelectedProduct(value: string) {
    setSelectedProduct(value);
  }

  async function findProducts() {
    const products = await api.getProducts();
    setListProducts(products);
  }

  function handleConfig() {
    setConfig(!config);
  }

  function handleControl() {
    setControl(!control);
  }

  async function handleDeleteProduct(id: string) {
    await api.deleteProduct(id);
    handleControl();
  }

  const sortedProducts =
    search.length > 0
      ? listProducts.filter((product) =>
          product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : listProducts;

  const navegate = useNavigate();

  useEffect(() => {
    findProducts();
  }, [control]);

  return (
    <StyledPageProduct>
      <h2>Produtos</h2>
      <Styledconfig>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          placeholder="Procurar"
        />
        <button onClick={handleConfig}>
          <FaCog />
        </button>
      </Styledconfig>
      <StyledCard>
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <StyledImage src={product.image} alt="Imagem do produto" />
            <h3>{product.title}</h3>
            <h5>{product.description}</h5>
            <h4>{product.price},00</h4>
            {config && (
              <ConfigButtons>
                <Link to={`/update-product/${product.id}`}>
                  <EditButton>Editar</EditButton>
                </Link>
                <DeleteButton onClick={() => handleDeleteProduct(product.id)}>
                  Deletar
                </DeleteButton>
              </ConfigButtons>
            )}
          </div>
        ))}
        <Link to="/create-product">
          {config && (
            <AddProduto>
              <FaFileMedical />
            </AddProduto>
          )}
        </Link>
      </StyledCard>
    </StyledPageProduct>
  );
}
