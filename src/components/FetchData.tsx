
interface APIData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface FetchDataProps{
    results: APIData[];
}

export default function FetchData({results}:FetchDataProps) {
  return (
    <div>
      {results.map((res) => (
        <div key={res.id} className="">
          <h1>{res.original_title}</h1>
        </div>
      ))}
    </div>
  )
}
