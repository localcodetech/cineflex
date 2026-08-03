import { useNavigate } from "react-router";

import useMovies from "@/hooks/usemovie";

import Moviecard  from "@/components/elements/moviecard"




const MovieRow = ({ title, fetchFunction }) => {
  const navigate = useNavigate();
  const { movies, error, isFirstLoad } = useMovies(fetchFunction);

  if (error) return null;

  return (
    <section className="mb-12">
      <h2 className="mb-4 px-5 text-xl font-bold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto px-5 pb-4 [&::-webkit-scrollbar]:hidden">
        {isFirstLoad
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-2/3 w-40 shrink-0 animate-pulse rounded-lg bg-neutral-800"
              />
            ))
          : movies.map((movie) => (
              <div key={movie.id} className="w-40 shrink-0">
                <Moviecard
                  movie={movie}
                  onCardClick={(selected) => navigate(`/movies/${selected.id}`)}
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default MovieRow;