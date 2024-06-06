import { ReadonlyURLSearchParams } from "next/navigation";
import { FetchData } from "@/components";
const API_KEY = process.env.API_KEY;

interface SearchParamsProps extends ReadonlyURLSearchParams {
  genre?: string;
}

export default async function Home({searchParams}:{searchParams:SearchParamsProps}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch the data')
  }
  const results = data.results;
  
  return (
    <div className="">
      <FetchData results={results}/>
    </div>
  )
}
