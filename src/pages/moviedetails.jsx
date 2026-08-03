import { useParams } from "react-router";
import useMovieDetails from "@/hooks/usemoviedetail";

import MovieHero from "@/section/moviedetail/moviehero";
import MoviePoster from "@/section/moviedetail/movieposter";
import MovieInfo from "@/section/moviedetail/movieinfo";

import { findTrailer } from "@/utils/moviehelpers";
import Paragraph from "@/components/common/Paragraph";

const MovieDetail = () => {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetails(id);

  if (loading) {
    return <Paragraph className="p-10">Loading...</Paragraph>;
  }

  if (error) {
    return <Paragraph className="p-10 text-primary">{error}</Paragraph>;
  }

  if (!movie) {
    return null;
  }

  const trailer = findTrailer(movie);

  const cast = movie.credits ? movie.credits.cast.slice(0, 8) : [];

  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";

  return (
    <>
      <MovieHero backdropPath={movie.backdrop_path} />

      <div className="relative mx-auto -mt-32 flex max-w-5xl flex-col gap-8 pb-20 md:flex-row">
        <MoviePoster posterPath={movie.poster_path} title={movie.title} />

        <MovieInfo movie={movie} year={year} cast={cast} trailer={trailer} />
      </div>
    </>
  );
};

export default MovieDetail;
