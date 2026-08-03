


import { useState } from "react";
import { useNavigate } from "react-router";

import useMovies from "@/hooks/usemovie";
import useSearchMovies from "@/hooks/usesearchmovies";
import useSearchQuery from "@/hooks/usesearchquery";
import useDebounce from "@/hooks/usedebounce";

import { discoverMovies } from "@/api/api";

import MoviesHeader from "@/section/movie/movieheader";
import MoviesGrid from "@/section/movie/moviegrid";
import FilterSection from "@/section/movie/filtersection";
import EmptyState from "@/section/movie/emptystates";
import LoadMoreButton from "@/section/movie/loadmorebutton";

const DEFAULT_FILTERS = {
  genre: "",
  year: "",
  sortBy: "popularity.desc",
};

const MoviesPage = () => {
  const navigate = useNavigate();

  const { query, setQuery } = useSearchQuery();

  const debouncedQuery = useDebounce(query, 500);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const search = useSearchMovies(debouncedQuery);

  const browse = useMovies(discoverMovies, filters);

  const isSearching = query.length > 0;

  const movies = isSearching
    ? search.results
    : browse.movies;

  const error = isSearching
    ? search.error
    : browse.error;

  const showSpinner = isSearching
    ? search.loading
    : browse.isFirstLoad;


    console.log({
  query,
  isSearching,
  browseMovies: browse.movies.length,
  searchMovies: search.results.length,
  loading: browse.loading,
});

console.log("Movies to render:", movies);
  return (
    <section className="py-10">
      <MoviesHeader
        query={query}
        setQuery={setQuery}
        isSearching={isSearching}
      />

      <FilterSection
        isSearching={isSearching}
        filters={filters}
        setFilters={setFilters}
      />

      {error && (
        <p className="text-red-500">
          {error}
        </p>
      )}

      {showSpinner && (
        <p>Loading...</p>
      )}

      <EmptyState
        loading={showSpinner}
        error={error}
        movies={movies}
        isSearching={isSearching}
        query={query}
      />

      <MoviesGrid
        movies={movies}
        onMovieClick={(movie) =>
          navigate(`/movies/${movie.id}`)
        }
      />

      <LoadMoreButton
        isSearching={isSearching}
        hasMore={browse.hasMore}
        loading={browse.loading}
        onLoadMore={browse.loadMore}
      />
    </section>
  );
};

export default MoviesPage;