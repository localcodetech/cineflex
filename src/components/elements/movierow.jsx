import { useRef } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useMovies from "@/hooks/usemovie";
import MovieCard from "@/components/elements/moviecard";

const MovieRow = ({ title, fetchFunction }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const { movies, error, isFirstLoad } = useMovies(fetchFunction);

  if (error) return null;

  const scroll = (direction) => {
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="group/row relative mb-12">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>

      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 backdrop-blur transition hover:bg-black group-hover/row:opacity-100 md:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 backdrop-blur transition hover:bg-black group-hover/row:opacity-100 md:block"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {isFirstLoad
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-2/3 w-40 shrink-0 animate-pulse rounded-lg bg-neutral-800"
              />
            ))
          : movies.map((movie) => (
              <div key={movie.id} className="w-40 shrink-0">
                <MovieCard
                  movie={movie}
                  onCardClick={(selected) => navigate(`/movie/${selected.id}`)}
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default MovieRow;