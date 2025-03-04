import { sql } from "@vercel/postgres";

import { Country } from "./definitions";

export async function fetchCountries() {
  try {
    const data = await sql<Country>`
        SELECT id, name
        FROM countries
        `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
