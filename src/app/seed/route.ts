//import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { countries } from "../lib/placeholder-data";

const client = await db.connect();

async function seedCountries() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS countries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const insertedCountries = await Promise.all(
    countries.map(async (country) => {
      //const hashedPassword = await bcrypt.hash(country.password, 10);
      return client.sql`
        INSERT INTO countries (id, name)
        VALUES (${country.id}, ${country.name})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedCountries;
}

export async function GET() {
  //   return Response.json({
  //     message:
  //       'Uncomment this file and remove this line. You can delete this file when you are finished.',
  //   });
  try {
    await client.sql`BEGIN`;
    await seedCountries();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
