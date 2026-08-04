import { useNavigate } from "react-router";
import useMovies from "@/hooks/usemovie";
import useMovieDetails from "@/hooks/usemoviedetail";
import MovieHero from "@/section/moviedetail/moviehero";
import { getTrending } from "@/api/api";
import { findTrailer } from "@/utils/moviehelpers";

const HomeHero = () => {
  const navigate = useNavigate();
  const { movies } = useMovies(getTrending);

  const featuredId = movies.length > 0 ? movies[0].id : null;
  const { movie } = useMovieDetails(featuredId);

  if (!movie) {
    return (
      <div className="relative left-1/2 w-screen -translate-x-1/2 min-h-[85vh] animate-pulse bg-neutral-900" />
    );
  }

  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";

  return (
    <MovieHero
      movie={movie}
      year={year}
      trailer={findTrailer(movie)}
      onMoreInfo={() => navigate(`/movies/${movie.id}`)}
    />
  );
};

export default HomeHero;