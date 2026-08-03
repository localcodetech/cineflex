import MovieCard from "@/components/elements/moviecard";

const MoviesGrid = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onCardClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default MoviesGrid;