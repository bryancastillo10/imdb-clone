import Image from "next/image";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

export default async function MoviePage({
  params,
}: {
  params: { id: number };
}) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className="pt-12 flex flex-col justify-center items-center">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="selected-movie"
        width={500}
        height={300}
        className="rounded-xl"
      ></Image>
      <div className="flex flex-col gap-2 my-4">
        <h2 className="text-center font-bold">{movie.title || movie.name}</h2>
        <p className="text-justify leading-normal text-base max-w-[500px] min-w-fit">
          {movie.overview}
        </p>
      </div>
      <div className="flex gap-10 justify-between">
        <p className="flex items-center gap-2">
          <BiSolidMoviePlay size={30} />
          {movie.release_date || movie.first_air_date}
        </p>
        <p className="flex items-center gap-2">
          <FaThumbsUp />
          {movie.vote_count}
        </p>
        <p className="flex items-center gap-2">
          <IoLanguage />
          {movie.original_language}
        </p>
      </div>
    </div>
  );
}
