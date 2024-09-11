import { addProductsMigration } from "./addProducts";

const executeMigrations = async () => {
  await addProductsMigration();
};

executeMigrations();
