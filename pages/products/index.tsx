import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await fetch("http://localhost:5003/api/product");
    const data = await result.json();

    return { props: { data } };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

const ProductsPage: NextPage<{ data: Product[] }> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>(props.data || []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetch(`http://localhost:5003/api/product/search?search=${searchTerm}`);
        const data = await result.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search for products" onChange={(e) => setSearchTerm(e.target.value)} style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }} />
      <h1>Products</h1>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <Link href={`http://localhost:5003/products/${product.id}`} key={product.id}>
              <div style={{ display: "flex", flexDirection: "column", cursor: 'pointer' }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>{product.name}</h1>
                </div>

                <img src={product.image_url} style={{ width: "50%" }} />
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>We are out of stock {":("}</p>
      )}
    </div>
  );
};

export default ProductsPage;
