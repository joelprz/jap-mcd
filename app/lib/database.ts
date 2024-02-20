import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchProducts() {
  
    try { 
      const data = await sql<Product>`SELECT * FROM products`;
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products data.');
    }
  }

export async function fetchProduct(_slug:string) {

    try {
        const data = await sql<Product>`SELECT * FROM Products WHERE slug=${_slug}`;

        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch product data.');
    }
}