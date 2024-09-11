import React, { useState } from "react";

interface CreateProductReviewProps {
  productId: string;
}

const CreateProductReview = ({ productId }: CreateProductReviewProps) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/products/${productId}/reviews`, {
      method: "POST",
      body: review,
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default CreateProductReview;
