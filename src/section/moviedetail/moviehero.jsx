import { Star, Users, Clock, Calendar, Play, Info } from "lucide-react";
import { getPosterUrl, getBackdropUrl } from "@/api/api";
import { formatRuntime } from "@/utils/moviehelpers";

const MovieHero = ({ movie, year, trailer, onMoreInfo }) => {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="absolute inset-0">
        {getBackdropUrl(movie.backdrop_path) && (
          <img
            src={getBackdropUrl(movie.backdrop_path)}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase text-black">
                Movie
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {year}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-4 text-lg italic text-neutral-300">
                "{movie.tagline}"
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
              <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-xs text-neutral-400">/10</span>
              </span>

              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {movie.vote_count.toLocaleString()} votes
              </span>

              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {formatRuntime(movie.runtime)}
              </span>

              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {movie.release_date}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-neutral-200 backdrop-blur"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-6 line-clamp-3 max-w-xl leading-relaxed text-neutral-300">
              {movie.overview || "No overview available."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trailer && (
                <a
                  href={trailer}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#e50914] px-7 py-3.5 font-bold text-white transition hover:bg-[#e50950]"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Watch Trailer
                </a>
              )}

              <button
                onClick={onMoreInfo}
                className="flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                <Info className="h-4 w-4" />
                More Info
              </button>
            </div>
          </div>

          {getPosterUrl(movie.poster_path) && (
            <div className="relative hidden lg:block">
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                className="w-64 rounded-xl shadow-2xl ring-1 ring-white/10"
              />

              <div className="absolute -bottom-5 -left-5 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-amber-400 bg-black/90 backdrop-blur">
                <span className="text-xl font-bold text-white">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-[9px] uppercase tracking-wide text-amber-400">
                  Rating
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieHero;