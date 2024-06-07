import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
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
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  original_name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FetchDataProps {
  results: APIData[];
}

export default function Card({ results }: FetchDataProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 max-w-6xl lg:gap-4 mx-auto py-4">
      {results.map((res) => (
        <div className="group">
          <Link href={`/movie/${res.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                res.backdrop_path || res.poster_path
              }`}
              alt="my-movies"
              width={500}
              height={300}
              className="rounded-t-xl group-hover:opacity-60 transition-opacity duration-500"
            ></Image>
            <div className="max-w-[500px]">
              <div className="p-4 text-center border-2 border-slate-800 dark:border-amber-500 rounded-b-xl mb-8">
                <h1 className="font-bold my-2 text-lg truncate">
                  {res.original_title || res.name}
                </h1>
                <p className="line-clamp-3 font-light text-md max-w-[95%] mx-auto">
                  {res.overview}
                </p>
                <div className="flex justify-around">
                  <p className="flex items-center gap-2">
                    <BsCalendarDateFill />
                    {res.release_date || res.first_air_date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiThumbsUp />
                    {res.vote_average}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineStarPurple500 />
                    {res.vote_count}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
