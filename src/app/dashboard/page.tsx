import { fetchCountries } from "@/app/lib/data";
import CountriesList from "@/app/ui/dashboard/countries-list";
import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  const countries = await fetchCountries();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <CountriesList countries={countries} />
      </div>
    </main>
  );
}
