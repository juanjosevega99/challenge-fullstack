import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import ProductDetailPage from "../../components/ProductDetailPage";
import { Product } from "../../types/product";

/**
 * 1. Client requests the `/product/[id]` page
 * 2. `getServerSideProps` is executed to fetch the props
 * 3. Return returns React `props` to the NextPage component.
 */
export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { id } = params;
    const result = await fetch(`http://localhost:3000/api/product/${id}`);
    const data = (await result.json()) as Product;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

const ProductListingPage: NextPage<{ data: Product }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return <ProductDetailPage product={props.data} />;
};

export default ProductListingPage;
