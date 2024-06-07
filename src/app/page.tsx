import { ReadonlyURLSearchParams } from "next/navigation";
import { Card } from "@/components";
const API_KEY = process.env.API_KEY;

interface SearchParamsProps extends ReadonlyURLSearchParams {
  genre?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const genre = searchParams.genre || "fetchTrending";
  const res: Response = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
      resolve(response);
    }, 2000);
  });

  const data = await res.json();
  if (!res.ok) {
    throw Error("Failed to fetch the data");
  }
  const results = data.results;

  return (
    <div className="">
      <Card results={results} />
    </div>
  );
}
