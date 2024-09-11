import { NextPage } from "next";
import type { Product } from "../../types/product";

const ProductsPage: NextPage<{ data: Product[] }> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Products</h1>
      <p>We are out of stock {":("}</p>
      <p>TODO: Display all products here</p>
    </div>
  );
};

export default ProductsPage;
