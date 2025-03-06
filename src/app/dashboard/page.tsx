import { fetchCountries } from "@/app/lib/data";
import CountriesList from "@/app/ui/dashboard/CountriesList";
import { lusitana } from "@/app/ui/fonts";
import styles from "./page.module.css";

export default async function Page() {
  const countries = await fetchCountries();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className={styles.page}>
        <CountriesList countries={countries} />
      </div>
    </main>
  );
}
