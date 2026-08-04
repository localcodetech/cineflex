import { formatRuntime } from "@/utils/moviehelpers";

import MovieGenres from "@/section/moviedetail/moviegenres";
import MovieCast from "@/section/moviedetail/moviecast";
import TrailerButton from "@/section/moviedetail/tailerbutton";
import Paragraph from "@/components/common/Paragraph";
import Head from "@/components/common/head";

const MovieInfo = ({ movie, year, cast, trailer }) => {
  return (
    <div>
      <Head className="text-4xl font-bold">{movie.title}</Head>

      {movie.tagline && (
        <Paragraph className="mt-2 italic text-neutral-400">{movie.tagline}</Paragraph>
      )}

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-300">
        <span>{year}</span>

        <span>{formatRuntime(movie.runtime)}</span>

        <span className="font-bold text-yellow-400">
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      <MovieGenres genres={movie.genres} />

      <Paragraph className="mt-6 leading-relaxed text-neutral-200">
        {movie.overview || "No overview available."}
      </Paragraph>

      <MovieCast cast={cast} />

      <TrailerButton trailer={trailer} />
    </div>
  );
};

export default MovieInfo;
