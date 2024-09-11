import { NextApiHandler } from "next";
import db from "../../../db/db";
import { Product } from "../../../types/product";

/**
 * GET /api/product/search?search={query}
 *
 * Your API must receive data in this format.
 */
interface ProductSearchParams {
  search: string;
}

/**
 * GET /api/product/search?search={query}
 *
 * Your API must return a response in this format.
 */
interface ProductSearchResponse {
  success: boolean;
  products: Product[];
}

const productsSearch: NextApiHandler = async (req, res) => {
  const { query } = req.query;
  const result = await db.query('SELECT * FROM "product"');
  res.status(200).json({
    success: true,
    products: result,
  });
};

export default productsSearch;
