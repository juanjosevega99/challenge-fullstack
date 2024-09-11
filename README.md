# NextJS Ecommerce App
This is a simple ecommerce app built with NextJS and Postgres.

## Setup with Docker (recommended)
```bash
docker-compose up
```

## Setup without Docker
1. [Install Postgres](https://www.postgresql.org/download/macosx/)
2. Install Node 16 
3. Install Yarn
4. Install dependencies
```bash
yarn
```

## Running the app
```bash
yarn dev
```

## Resources
- ✅ Searching the internet for answers (Stackoverflow, Google)
- ❌ Github Copilot (please turn this off in your IDE)
- ❌ Any AI based code generation tool

## Assignment
### Understanding
1. Run the sample application.
2. Click the example button on the home page and read through the documentation.
3. Don't forget to commit and push your code before the test is over!

### Tasks
#### 1. Product Details Page
Navigate to `/products/5` and see the product details page. Your task is to fix it so that the product details page has the product name, price, image, description.

#### 2. Product List
Navigate to `/products` and see the product list page. Your task is to query the `/api/product` endpoint and display all the products in this page. 

A user should be able to see the product name, price, small image, and description. 

Clicking on a product should open the product details page for that product.

#### 3. Product Search
In the product list page, add a search bar that allows the user to search for products by name. 

Typing in the search bar should filter the list of products to only show products that match the search term, using a case insensitive search. This should happen without refreshing the page, and should be implemented with a new API `api/product/search?query=${query}`.

The `ProductSearchParams` and `ProductSearchResponse` types are defined in `pages/api/product/search.ts`. Your API must follow this specific request and response format.

Ensure your API handles all edge cases gracefully such as invalid query parameters.

### Requirements
- Postgres
- Node