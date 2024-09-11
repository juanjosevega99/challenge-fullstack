import { NextApiHandler } from "next";
import db from "../../../db/db";

const productsIndex: NextApiHandler = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM "product"');
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "No Products Found",
    });
  }
};

export default productsIndex;
