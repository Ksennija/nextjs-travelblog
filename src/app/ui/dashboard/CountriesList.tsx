//import { lusitana } from "@/app/ui/fonts";
import { Country } from "@/app/lib/definitions";
import Image from "next/image";
import styles from "./CountriesList.module.css";

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function CountriesList({
  countries,
}: {
  countries: Country[];
}) {
  if (!countries || countries.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className={styles.listingSection}>
      {/* <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2> */}

      {countries.map((country) => (
        <div key={country.id} className={styles.country}>
          <div className={styles.imageBox}>
            <Image
              className={styles.images}
              src={country.src}
              width={500}
              height={250}
              alt={country.alt}
            />
          </div>
          <div className={styles.textBox}>
            <p className={styles.item}>{country.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
