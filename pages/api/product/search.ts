import { NextApiHandler } from 'next';
import db from '../../../db/db';
import { Product } from '../../../types/product';

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
  try {
    const { search } = req.query as ProductSearchParams;

    if (typeof search !== 'string') {
      return res.status(400).json({
        success: false,
        products: [],
        message: 'Invalid search parameter',
      } as ProductSearchResponse);
    }

    let result;

    if (search.trim() === '') {
      result = await db.query(`SELECT * FROM "product"`);
    } else {
      result = await db.query(`SELECT * FROM "product" WHERE name ILIKE $1`, [
        `%${search}%`,
      ]);
    }

    res.status(200).json({
      success: true,
      products: result,
    } as ProductSearchResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      products: [],
      message: 'Internal server error',
    } as ProductSearchResponse);
  }
};

export default productsSearch;
