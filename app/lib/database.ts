import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Product } from "./definitions";
import { formatCurrency } from "./utils";

export async function fetchProducts() {
  
    try { 
      const data = await sql<Product>`SELECT * FROM products`;
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products data.');
    }
  }