import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import Container from "@/layout/container";
import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";
import { Button } from "@/components/ui/button";

import useMovies from "@/hooks/usemovie";
import { getTrending, getPosterUrl } from "@/api/api";

const HeroContent = () => {
  const { movies } = useMovies(getTrending);

  const posters = movies.slice(0, 6);

  return (
    <Container>
      <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            🔥 Updated Daily
          </span>

          <div className="space-y-5">
            <Head
              text="Discover Your Next Favorite Movie."
              className="text-5xl font-bold leading-tight lg:text-7xl"
            />

            <Paragraph
              text="Explore thousands of movies, watch official trailers and discover what's trending."
              className="max-w-xl text-lg text-neutral-300"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to={"/home"}>
              <Button className="h-12 px-8 transition duration-200 hover:-translate-y-0.5">
                Browse Movies
              </Button>
            </Link>

            <Link to={"/tv"}>
              <Button
                variant="outline"
                className="group h-12 px-8 text-accent-foreground transition duration-200 hover:-translate-y-0.5"
              >
                Live TV
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
            <span>🎬 Official Trailers</span>
            <span>📺 Live TV Channels</span>
            <span>🔥 Trending Movies</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-3 gap-4">
            {posters.length === 0
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className={`aspect-2/3 animate-pulse rounded-xl bg-neutral-800 ${
                      index % 3 === 1 ? "mt-8" : ""
                    }`}
                  />
                ))
              : posters.map((movie, index) => (
                  <img
                    key={movie.id}
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className={`aspect-2/3 w-full rounded-xl object-cover shadow-2xl transition duration-300 hover:-translate-y-2 ${
                      index % 3 === 1 ? "mt-8" : ""
                    }`}
                  />
                ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>
      </div>
    </Container>
  );
};

export default HeroContent;