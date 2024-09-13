import CreateProductReview from "./CreateProductReview";
import { Product } from "../types/product";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = (props: ProductDetailPageProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h1>{props.product.name}</h1>
      </div>

      <img src={props.product.image_url} />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <h3>Reviews</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          color: "var(--text-light)",
          backgroundColor: "var(--accent-bg)",
          marginBottom: "1rem",
        }}
      >
        <p>No reviews found! Be the first to leave a review.</p>
      </div>
      <p>Leave a review</p>
      <CreateProductReview productId={props.product.id} />
    </div>
  );
};

export default ProductDetailPage;
