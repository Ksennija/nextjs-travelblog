import { sql } from "@vercel/postgres";

import { Country } from "./definitions";

export async function fetchCountries() {
  try {
    const data = await sql<Country>`
        SELECT 
        countries.id as id, 
        countries.name as name, 
        photos.src as src,
        photos.alt as alt
        FROM countries
        LEFT JOIN photos on countries.id = photos.country_id
        ORDER BY countries.name;
        `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
