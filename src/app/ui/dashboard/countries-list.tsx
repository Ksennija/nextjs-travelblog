//import { lusitana } from "@/app/ui/fonts";
import { Country } from "@/app/lib/definitions";

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
    <div className="w-full md:col-span-4">
      {/* <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2> */}

      {countries.map((country) => (
        <div key={country.id} className="flex flex-col items-center gap-2">
          <div className="w-full rounded-md bg-blue-300"></div>
          <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
            {country.name}
          </p>
        </div>
      ))}
    </div>
  );
}
